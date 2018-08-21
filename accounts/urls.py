from django.contrib import admin
from django.urls import re_path, include

from django.contrib.auth import views as auth_views

from accounts import views as accounts_views


urlpatterns = [
    re_path(r'^home/$', accounts_views.home, name='home'),
    re_path(r'^login/$', auth_views.login, {'template_name': 'login.html'}, name='login'),
    re_path(r'^logout/$', auth_views.logout, {'next_page': 'login'}, name='logout'),
    re_path(r'^signup/$', accounts_views.signup, name='signup'),
]
