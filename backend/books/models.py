from django.db import models
from django.urls import reverse


class Book(models.Model):
    title = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.SmallIntegerField(default=0)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('books:book_detail', args=[str(self.id)])
