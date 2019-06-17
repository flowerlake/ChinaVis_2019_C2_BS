"""ChinaVis_Server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import routers
from data_process import views, urls

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# 使用自动URL路由连接我们的API。
# 另外，我们还包括支持浏览器浏览API的登录URL。
urlpatterns = [
    url(r'^', include(urls)),
    url(r'index/', views.home),
    url(r'index2/', views.index2),
    url(r'index3', views.index3),
    url(r'map4/', views.map4),
    url(r'map5/', views.map5),
    # 这里真jb逗、ajax的请求URL最后不能有斜杠,有斜杠则会请求不到资源
    url(r'ajax/new-time', views.new_time),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
