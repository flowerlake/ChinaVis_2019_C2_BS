from django.db import models


# Create your models here.
class GpsAllPoint(models.Model):
    orderId = models.CharField(max_length=100)
    time = models.DateField()
    lng = models.CharField(max_length=20)
    lat = models.CharField(max_length=20)
    road = models.CharField(max_length=50, null=True)


class OrderStartEnd(models.Model):
    orderId = models.CharField(max_length=100, primary_key=True)
    start_lng = models.CharField(max_length=20, null=True)
    start_lat = models.CharField(max_length=20, null=True)
    end_lng = models.CharField(max_length=20, null=True)
    end_lat = models.CharField(max_length=20, null=True)
    start_time = models.DateField()
    end_time = models.DateField()
    time_min_diff = models.IntegerField()


class StartPoint(models.Model):
    orderId = models.CharField(max_length=100, primary_key=True)
    district = models.CharField(max_length=100)
    street = models.CharField(max_length=100)


class EndPoint(models.Model):
    orderId = models.CharField(max_length=100, primary_key=True)
    district = models.CharField(max_length=100, default=' ')
    street = models.CharField(max_length=100, default=' ')
    business = models.CharField(max_length=100, default=' ')
