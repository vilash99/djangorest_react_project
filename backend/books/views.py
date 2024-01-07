from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView,  DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from .models import Book


class BookListView(ListView):
    model = Book
    template_name = 'book_list.html'
    context_object_name = 'books'


class BookDetailView(DetailView):
    model = Book
    template_name = 'book_detail.html'


class BookCreateView(LoginRequiredMixin, CreateView):
    model = Book
    template_name = 'book_new.html'
    fields = '__all__'


class BookUpdateView(LoginRequiredMixin, UpdateView):
    model = Book
    template_name = 'book_edit.html'
    fields = ['title', 'price', 'rating', 'quantity']


class BookDeleteView(LoginRequiredMixin, DeleteView):
    model = Book
    template_name = 'book_delete.html'
    success_url = reverse_lazy('books:home')
