from django.urls import path
from .views import FacultyPerformanceListCreateView, FacultyPerformanceDetailView

urlpatterns = [
    path('api/faculty-performance/', FacultyPerformanceListCreateView.as_view(), name='faculty-performance-list-create'),
    path('api/faculty-performance/<int:pk>/', FacultyPerformanceDetailView.as_view(), name='faculty-performance-detail'),
]