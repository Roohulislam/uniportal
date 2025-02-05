from rest_framework import generics
from .models import TaskCategory, PendingTask
from .serializers import TaskCategorySerializer, PendingTaskSerializer

class TaskCategoryListView(generics.ListCreateAPIView):
    queryset = TaskCategory.objects.all()
    serializer_class = TaskCategorySerializer


class TaskCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskCategory.objects.all()
    serializer_class = TaskCategorySerializer


class PendingTaskListView(generics.ListCreateAPIView):
    queryset = PendingTask.objects.all()
    serializer_class = PendingTaskSerializer

    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        if category_id:
            return PendingTask.objects.filter(category__id=category_id)
        return PendingTask.objects.all()


class PendingTaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PendingTask.objects.all()
    serializer_class = PendingTaskSerializer
