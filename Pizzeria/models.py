from django.db import models

# Create your models here.
class Pago(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.CharField(max_length=255, blank=True)
    def __str__(self):
        return f"Pago - {self.monto} - {self.fecha}"

class Pizza(models.Model):
    tipo= models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

