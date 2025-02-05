from django.contrib import admin
from .models import FacultyPerformance

@admin.register(FacultyPerformance)
class FacultyPerformanceAdmin(admin.ModelAdmin):
    list_display = ('faculty_name', 'teaching_performance', 'research_performance', 'student_feedback', 'overall_performance')
    search_fields = ('faculty_name',)
