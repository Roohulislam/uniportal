from django.contrib import admin
from .models import TaskCategory, PendingTask

@admin.register(TaskCategory)
class TaskCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name']


@admin.register(PendingTask)
class PendingTaskAdmin(admin.ModelAdmin):
    list_display = ['task', 'priority', 'progress', 'category']
    list_filter = ['priority', 'category']
    search_fields = ['task', 'description']
