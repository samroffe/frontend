from django.urls import path
from . import views

urlpatterns = [
    path('chatassistant/', views.chatassistant, name='chatassistant'),
]