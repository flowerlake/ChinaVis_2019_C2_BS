import json

data = json.load(open("static/data/average_speed.json"))
#
# tmp_data = {}
#
# roads = data['0'].keys()
#
# for i in roads:
#     tmp_data[i] = []
#
# for time, item in data.items():
#     for road, speed in item.items():
#         tmp_data[road].append((time, speed))
#
# with open("static/data/average_speed.json",'w',encoding='utf-8') as f:
#     f.write(json.dumps(tmp_data))
print(data.keys())