from django.db import models
import csv
import json

class Map(models.Model):
    ZIP = models.CharField(max_length=30)
    
class Sites(models.Model):
    uuid = models.TextField(max_length=255)
    Site_Name = models.TextField(max_length=255)
    Address_1 = models.TextField(max_length=255)
    City = models.TextField(max_length=255)
    County = models.TextField(max_length=255)
    ZIP = models.TextField(max_length=255)
    site_type = models.TextField(max_length=255)
    Latitude = models.FloatField(primary_key=True)
    Longitude = models.FloatField()