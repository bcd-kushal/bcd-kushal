from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from app import views

urlpatterns = [
    path('admin/', admin.site.urls, name='admin-site'),

    path('', views.homepage, name='homepage'),
    
    path('works/', views.works, name='works'),
    path('works/projects/', views.projects, name='projects'),



    path('interests/', views.interests, name='interests'),


    path('portfolio/', views.portfolio, name='portfolio'),

    path('contact', views.redirect_to_contactme, name='contact-redirect'),
    path('contact-me/', views.contact, name='contact'),
    


    path('terms/', views.my_terms, name='my-terms'),
    
    # REST UNDEFINED PATTERNS
    re_path(r'^.*/$', views.send_bad_request, name='bad-route'),

]
