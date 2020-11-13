from django.db import models

#Creatinng our models
# Creatinng our Leads model
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    mmessage = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)