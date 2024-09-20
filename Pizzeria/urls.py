from django.urls import path
from .views import PizzaListCreateAPIView

urlpatterns = [
path('api/pizzas/',PizzaListCreateAPIView.as_view(), name='pizza-list-create'),
]
