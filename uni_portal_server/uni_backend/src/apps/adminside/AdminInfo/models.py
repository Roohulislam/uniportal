from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    courses_taught = models.IntegerField()
    highest_qualification = models.CharField(max_length=100)
    years_of_experience = models.IntegerField()
    is_current_advisor = models.BooleanField(default=False)
    date_of_birth = models.DateField()
    cnic = models.CharField(max_length=15, unique=True)
    research_interests = models.TextField()

    def __str__(self):
        return self.name
