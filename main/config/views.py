from django.shortcuts import render

def index(request):
    return render(request, "index.html")


def first_info(request):
    return render(request, "first-info.html")

