from django.urls import path

from .views import BookAPIList, BookAPIDetail

urlpatterns = [
    path('', BookAPIList.as_view()),
    path('<int:pk>/', BookAPIDetail.as_view()),
]
