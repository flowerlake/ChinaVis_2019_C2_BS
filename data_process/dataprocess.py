import pandas as pd
import numpy as np
import time,json


def timestamp_datetime(value):
    value = time.localtime(value)
    dt = time.strftime('%Y-%m-%d %H:%M:%S', value)
    # 返回'2018-05-01 10:08:33'格式的日期
    return dt


data_begin = pd.read_csv("static/data/start_time_road.csv")
# data_start = pd.read_csv("static/data/start_data.csv")


# data_start['street'] = data_begin['street']
# tmp_time = list(data_start['start_time'])
# data_start['start_time'] = list(map(timestamp_datetime,tmp_time))


roads = ['兰沟路', '华板路', '广都上街', '龙马大道', '南通路三段', 'g213', '海昌北路', '致富路', '正东上街', '广东街', '顺河街', '新码头北街', '湾河东街',
         '华阳大道四段', '双华路', '腾飞十路', '藕塘街', '南湖路', '老成仁路', '黄龙大道', '二江路', '元华路', '南通路', '云龙路', '天府大道', '湾河街', '牧华路',
         '锦江路二段', '湾河西街', '新码头东街', '藕塘新街', '府河路二段', '华府大道', '府河路三段', '簸箕街', '正东街', '普林场街', '二江路一段', '丽都街', '南海路',
         '腾飞十二路', '广东路', '正东中街', '回龙路', '双兴路', '长安街', '中彭路', '黄龙大道一段', '新码头南街', '东山大道一段', '华彭路', '丁字街', '华阳大道',
         '太平街', '黄龙大道二段', '腾飞十一路', '府河路', '庐山大道', '东山大道', '正兴路', '锦江路', '黄龙大道三段', '水津街', '麓山大道', '南通路一段', '府河路一段',
         '虎高路', '正东下街']
roads = sorted(roads)

print(data_begin.head())

roads_point = {}
for j in roads:
    tmp_whole = {"type": "FeatureCollection", "features": []}
    data_tmp = data_begin[data_begin["street"] == j]
    for i in data_tmp.index:
        point = data_tmp.loc[i]
        hour_0 = point['start_time'].split(" ")[1]
        hour_1 = int(hour_0.split(":")[0])
        tmp_whole['features'].append(
            {"type": "Feature", "properties": {"orderID": point['orderID'], "Hour": hour_1},
             "geometry": {"type": "Point", "coordinates": [point['lng'], point['lat']]}}
        )
    roads_point[j] = tmp_whole

with open("static/data/roads_start_point2.json",'w',encoding='utf-8') as f:
    f.write(json.dumps(roads_point))

# print(len(roads_point['丁字街']['features']))