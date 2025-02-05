from django.db import models

class FacultyPerformance(models.Model):
    faculty_name = models.CharField(max_length=100)
    teaching_performance = models.PositiveIntegerField(help_text="Percentage score for teaching performance")
    research_performance = models.PositiveIntegerField(help_text="Percentage score for research performance")
    student_feedback = models.PositiveIntegerField(help_text="Percentage score for student feedback")
    overall_performance = models.PositiveIntegerField(help_text="Overall performance percentage")

    def __str__(self):
        return self.faculty_name
