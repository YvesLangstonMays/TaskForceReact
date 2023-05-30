from rest_framework.serializers import ModelSerializer
from . models import *


class WebsiteSerializer(ModelSerializer):
    class Meta:
        model = Sites
        fields = '__all__'