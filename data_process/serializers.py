from django.contrib.auth.models import User, Group
from rest_framework import serializers


# 在这个例子中我们用到了超链接关系，使用 HyperlinkedModelSerializer
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


# 开发我们的Web API的第一件事是为我们的Web API提供一种将代码片段实例序列化和反序列化为诸如json之类的表示形式的方式。
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class DataSerializer(serializers.Serializer):
    def create(self, validated_data):
        """
        根据提供的验证过的数据创建一个新的GpsCoordinate实例
        :param validated_data:
        :return:
        """
        return GpsCoordinate.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        根据提供的验证过的数据更新和返回一个已存在的GpsCoordinate实例
        :param instance:
        :param validated_data:
        :return:
        """
        instance.orderID = validated_data.get("oderID",instance.orderID)

        # create()和update()方法定义了在调用serializer.save()时如何创建和修改完整的实例。
        instance.save()
        return instance

# class ModelTestSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GpsCoordinate
#         field = ("OrderID","time","lng","lat")
