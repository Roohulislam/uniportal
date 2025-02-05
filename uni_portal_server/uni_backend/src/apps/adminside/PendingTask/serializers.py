from rest_framework import serializers
from .models import TaskCategory, PendingTask

class PendingTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = PendingTask
        fields = ['id', 'task', 'description', 'progress', 'priority', 'category']

class TaskCategorySerializer(serializers.ModelSerializer):
    tasks = PendingTaskSerializer(many=True, read_only=True)

    class Meta:
        model = TaskCategory
        fields = ['id', 'name', 'description', 'tasks']
