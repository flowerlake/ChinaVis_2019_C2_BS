# ajax坑：在ajax的请求方法中，不能有输出语句，前后端都不能有，否则将一直请求error.

import json
import pandas as pd

from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from data_process.serializers import UserSerializer, GroupSerializer
from data_process.models import GpsAllPoint


def home(request):
    pre_data = json.load(open('data_process/static/data/start_output.geojson'))



    roads = ['兰沟路', '华板路', '广都上街', '龙马大道', '南通路三段', 'g213', '海昌北路', '致富路', '正东上街', '广东街', '顺河街', '新码头北街', '湾河东街',
             '华阳大道四段', '双华路', '腾飞十路', '藕塘街', '南湖路', '老成仁路', '黄龙大道', '二江路', '元华路', '南通路', '云龙路', '天府大道', '湾河街', '牧华路',
             '锦江路二段', '湾河西街', '新码头东街', '藕塘新街', '府河路二段', '华府大道', '府河路三段', '簸箕街', '正东街', '普林场街', '二江路一段', '丽都街', '南海路',
             '腾飞十二路', '广东路', '正东中街', '回龙路', '双兴路', '长安街', '中彭路', '黄龙大道一段', '新码头南街', '东山大道一段', '华彭路', '丁字街', '华阳大道',
             '太平街', '黄龙大道二段', '腾飞十一路', '府河路', '庐山大道', '东山大道', '正兴路', '锦江路', '黄龙大道三段', '水津街', '麓山大道', '南通路一段', '府河路一段',
             '虎高路', '正东下街']
    roads = sorted(roads)

    data = {
        "change_overtime": json.dumps(pre_data),
        "roads": [],
    }

    data['roads'].append(roads)

    if request.method == 'POST':
        try:
            search_road = str(request.POST.get('road'))

            speed_data = json.load(open('data_process/static/data/average_speed.json', encoding='utf-8'))
            map_data = json.load(open('data_process/static/data/roads_start_point.json'))

            road_speed = speed_data[search_road]

            list_speed = [i[1] for i in road_speed]
            organized_data = {
                "speed": list_speed,
                "map_roads": json.dumps(dict(map_data[search_road]))
            }

            return HttpResponse(json.dumps(organized_data), content_type='application/json')
        except Exception as e:
            search_time = int(request.POST.get('start_end'))
            if search_time == 1:
                map_data = json.load(open('data_process/static/data/end_output.geojson'))
                organized_data = {
                    "map_roads": json.dumps(map_data)
                }
                return HttpResponse(json.dumps(organized_data))
            else:
                map_data = json.load(open('data_process/static/data/start_output.geojson'))
                organized_data = {
                    "map_roads": json.dumps(map_data)
                }
                return HttpResponse(json.dumps(organized_data), content_type='application/json')

    return render(request, 'index.html', data)


def index2(request):
    # TODO：弹窗内有3个内容，一个是太阳图，表格数据，以及词云图。(这个把静态的图放进去就行了)
    # TODO：解决两个问题，一个是夏毅疏导方案的图，一个是饼图的加载。还有第一个的问题的解决。
    pie_road = json.load(open("data_process/static/data/road1.geojson"))
    data = {
        "pie_road": json.dumps(pie_road),
    }

    return render(request, 'Framework_2.html', data)


def index3(request):
    # 这个页面里主要放3张图表外加一个时间轴，分别是 弦图，表示一个小时的流量情况
    # 然后再用一个日力图，表示几十条路在这个小时前后3个小时，共7个小时的流量分布情况
    # 然后再用一个折线图，表示流图表示这一个小时内的流量分布情况，按照10分钟来划分，这样就把每个小时的情况分析的很透彻了。
    if request.method == 'POST':
        hour_in_out = json.load(open("data_process/static/data/hour_in_out.json", encoding='utf-8'))
        with open("data_process/static/data/seconds_number.txt", 'r', encoding='utf-8') as f:
            seconds_number = f.readlines()
        seconds_number = [eval(i.strip()) for i in seconds_number]

        time = str(request.POST.get('time'))

        with open("data_process/static/data/heatmap_data/" + time + "/coordinate.json") as f:
            z_data = f.read()
        with open("data_process/static/data/heatmap_data/" + time + "/road.json") as f:
            x_data = f.read()
        with open("data_process/static/data/heatmap_data/" + time + "/time.json") as f:
            y_data = f.read()

        x_data = eval(x_data)
        y_data = eval(y_data)
        z_data = eval(z_data)

        search_seconds_date = [i[1] for i in seconds_number if i[0] == int(time)]
        search_seconds_data = [i[2] for i in seconds_number if i[0] == int(time)]

        search_hour_data = hour_in_out[str(time)]
        # 这里不能输出任何语句，包括前后端，都不可以直接输出，不然会影响ajax请求结果，而且会请求失败。
        # print(search_hour_data[:3])
        return_json = {
            "hour_data": search_hour_data,
            "line_seconds_date": search_seconds_date,
            "line_seconds_data": search_seconds_data,
            "heatmap_x": x_data,
            "heatmap_y": y_data,
            "heatmap_z": z_data
        }

        # 这里不能输出jsonResponse，不然传到前端的结果是string类型
        return HttpResponse(json.dumps(return_json), content_type='application/json')
        # return render(request, 'Framework_3.html', {"hour_data": json.dumps(search_hour_data)})

    return render(request, 'Framework_3.html')


def new_time(request):
    time = str(request.GET.get('time'))
    # print(time)
    hour_in_out = json.load(open("data_process/static/data/hour_in_out.json"))
    search_hour_data = hour_in_out[str(time)]
    # print(search_hour_data[0])
    return_json = {"hour_data": search_hour_data}
    # print(return_json)
    return HttpResponse(json.dumps(return_json), content_type='application/json')


def map4(request):
    return render(request, "Framework_4.html")


def map5(request):
    return render(request, "Framework_5.html")



# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    允许用户查看或编辑的API路径。
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    允许组查看或编辑的API路径。
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def snippet_list(request):
    """
    列出所有的code snippet，或创建一个新的snippet。
    """
    if request.method == 'GET':
        snippets = GpsCoordinate.objects.all()
        # 我们也可以序列化查询结果集（querysets）而不是模型实例。我们只需要为serializer添加一个many = True标志。
        serializer = ModelTestSerializer(snippets, many=True)
        return JSONResponse(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ModelTestSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)


@csrf_exempt
def snippet_detail(request, pk):
    """
    获取，更新或删除一个 code snippet。
    """
    try:
        snippet = GpsCoordinate.objects.get(pk=pk)
    except GpsCoordinate.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ModelTestSerializer(snippet)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ModelTestSerializer(snippet, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        snippet.delete()
        return HttpResponse(status=204)
