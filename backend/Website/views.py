from django.shortcuts import render
from rest_framework.views import APIView
from . models import Sites
from rest_framework.response import Response
from . serializer import WebsiteSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
import json


serializer_class = WebsiteSerializer

@api_view(['GET'])
def zipDetail(request, pk):
    zip = Sites.objects.filter(ZIP=pk)
    serializer = WebsiteSerializer(zip, many=True)
    newList = (json.dumps(serializer.data))
    newList = json.loads(newList)
    print(newList)
    print("\n")
    finalLatLng_List = []
    counter = 0
    while (counter < len(newList)):
        latitude = str(newList[counter]["Latitude"])
        longitude = str(newList[counter]["Longitude"])
        finalLatLng = (latitude + "," + longitude ) 
        finalLatLng_List.append(finalLatLng)
        finalLatLng_List = [item.replace("'", '') for item in finalLatLng_List]
        counter += 1
    
    return Response(finalLatLng_List)