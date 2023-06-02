from django.contrib import admin
from django.urls import path, include
from Website import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path('List/', views.databaseList),
    # path('getaddress/', views.databaseList),
    path('getaddress/<str:pk>/', views.zipDetail, name="Zipcode"),
    path('__debug__/', include('debug_toolbar.urls')),
]
