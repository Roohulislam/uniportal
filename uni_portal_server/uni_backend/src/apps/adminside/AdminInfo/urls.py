from django.urls import path
from .views import TeacherListCreateView, TeacherDetailView

urlpatterns = [
    path('api/teachers/', TeacherListCreateView.as_view(), name='teacher-list-create'),
    path('api/teachers/<int:id>/', TeacherDetailView.as_view(), name='teacher-detail'),
]
