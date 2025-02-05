from rest_framework import generics
from .models import FacultyPerformance
from .serializers import FacultyPerformanceSerializer

# List all Faculty Performance data or create a new record
class FacultyPerformanceListCreateView(generics.ListCreateAPIView):
    queryset = FacultyPerformance.objects.all()
    serializer_class = FacultyPerformanceSerializer

# Retrieve, Update, or Delete a single Faculty Performance record
class FacultyPerformanceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacultyPerformance.objects.all()
    serializer_class = FacultyPerformanceSerializer
