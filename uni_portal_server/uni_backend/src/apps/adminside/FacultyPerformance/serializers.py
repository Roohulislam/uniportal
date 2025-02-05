from rest_framework import serializers
from .models import FacultyPerformance

class FacultyPerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacultyPerformance
        fields = '__all__'
