# todos/serializers.py
from rest_framework import serializers
from .models import *


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Todo
class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer 
        fields = ('pk','first_name', 'last_name', 'email', 'phone','address','description')