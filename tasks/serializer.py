from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #serializar campo por campo
        #fields = ('id', 'title', 'description', 'done')

        #serializar todos los campos
        fields = '__all__'