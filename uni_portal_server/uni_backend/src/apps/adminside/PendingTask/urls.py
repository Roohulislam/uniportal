from django.urls import path
from .views import TaskCategoryListView, TaskCategoryDetailView, PendingTaskListView, PendingTaskDetailView

urlpatterns = [
    # Task categories
    path('api/task-categories/', TaskCategoryListView.as_view(), name='task-category-list'),
    path('api/task-categories/<int:pk>/', TaskCategoryDetailView.as_view(), name='task-category-detail'),
    
    # Pending tasks
    path('api/tasks/', PendingTaskListView.as_view(), name='pending-task-list'),
    path('api/tasks/<int:pk>/', PendingTaskDetailView.as_view(), name='pending-task-detail'),
    path('api/tasks/category/<int:category_id>/', PendingTaskListView.as_view(), name='pending-task-by-category'),
]
