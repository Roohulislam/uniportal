from django.db import models

class TaskCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name


class PendingTask(models.Model):
    PRIORITY_CHOICES = (
        ('urgent', 'Urgent'),
        ('high', 'High'),
        ('normal', 'Normal'),
    )
    
    task = models.CharField(max_length=255)
    description = models.TextField()
    progress = models.IntegerField(default=0)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    category = models.ForeignKey(TaskCategory, related_name='tasks', on_delete=models.CASCADE)

    def __str__(self):
        return self.task
