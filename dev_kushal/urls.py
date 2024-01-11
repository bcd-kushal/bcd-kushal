from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from app import views

urlpatterns = [
    path('admin/', admin.site.urls, name='admin-site'),

    path('', views.homepage, name='homepage'),
    
    path('works/', views.works, name='works'),
    path('works/websites/', views.websites, name='websites'),
    path('works/softwares/', views.softwares, name='softwares'),
    path('works/artworks/', views.artworks, name='artworks'),
    path('works/teaching/', views.teaching, name='teaching'),



    path('journey/', views.journey, name='journey'),
    path('journey/learning/', views.learning, name='learning'),
    path('journey/reading/', views.reading, name='reading'),
    path('journey/anime/', views.anime, name='anime'),
    path('journey/others/', views.other_journeys, name='other-journeys'),


    path('gallery/', views.gallery, name='gallery'),


    path('portfolio/', views.portfolio, name='portfolio'),

    path('contact', views.redirect_to_contactme, name='contact-redirect'),
    path('contact-me/', views.contact, name='contact'),
    


    path('terms/', views.my_terms, name='my-terms'),
    
    # REST UNDEFINED PATTERNS
    re_path(r'^.*/$', views.send_bad_request, name='bad-route'),

]
