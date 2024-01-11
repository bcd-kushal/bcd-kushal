from django.shortcuts import render

import time
import threading

from django.views.decorators.cache import cache_page
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate as default_authenticate, login as LoginUser, logout as LogoutUser
from django.contrib.auth.models import User as RegisteredUsers
from django.contrib.auth.views import LoginView
from django.views.decorators.csrf import csrf_exempt


from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# =====[ HOMEPAGE ]===================================================

# @/
def homepage(req):
    if req.method == "GET":
        return render(req,"src/index.html",{})
    else:
        return 



# ====================================================================
# ====================================================================
# ======[ PORTFOLIO ]=================================================
# ====================================================================

# @/gallery/    
def gallery(req):
    if req.method == "GET":
        return render(req,"src/gallery.html",{})
    else:
        return send_bad_request(req)





# ====================================================================
# ====================================================================
# ======[ PORTFOLIO ]=================================================
# ====================================================================

# @/portfolio/    
def portfolio(req):
    if req.method == "GET":
        return render(req,"src/portfolio.html",{})
    else:
        return send_bad_request(req)




# ====================================================================
# ====================================================================
# ======[ WORKS ]=====================================================
# ====================================================================

# @/works/
def works(req):
    if req.method == "GET":
        return render(req,"src/works.html",{})
    else:
        return send_bad_request(req)
    


# @/works/websites/
def websites(req):
    if req.method == "GET":
        return render(req,"src/works/websites.html",{})
    else:
        return send_bad_request(req)
    
    
# @/works/softwares/
def softwares(req):
    if req.method == "GET":
        return render(req,"src/works/softwares.html",{})
    else:
        return send_bad_request(req)
    
    
# @/works/artworks/
def artworks(req):
    if req.method == "GET":
        return render(req,"src/works/artworks.html",{})
    else:
        return send_bad_request(req)
    
    
# @/works/teaching/
def teaching(req):
    if req.method == "GET":
        return render(req,"src/works/teaching.html",{})
    else:
        return send_bad_request(req)
    






# ====================================================================
# ====================================================================
# ======[ JOURNEY ]===================================================
# ====================================================================

# @/journey/
def journey(req):
    if req.method == "GET":
        return render(req,"src/journey.html",{})
    else:
        return send_bad_request(req)
    



# @/journey/learning/
def learning(req):
    if req.method == "GET":
        return render(req,"src/journey/learning.html",{})
    else:
        return send_bad_request(req)
    





# @/journey/reading/
def reading(req):
    if req.method == "GET":
        return render(req,"src/journey/reading.html",{})
    else:
        return send_bad_request(req)
    





# @/journey/anime/
def anime(req):
    if req.method == "GET":
        return render(req,"src/journey/anime.html",{})
    else:
        return send_bad_request(req)
    





# @/journey/others/
def other_journeys(req):
    if req.method == "GET":
        return render(req,"src/journey.html",{})
    else:
        return send_bad_request(req)
    








# ====================================================================
# ====================================================================
# ======[ CONTACT ME ]================================================
# ====================================================================

# @/contact/
def redirect_to_contactme(req):
    if req.method == "GET":
        return redirect("/contact-me/")
    else:
        return send_bad_request(req)
    


# @/contact-me/
def contact(req):
    if req.method == "GET":
        return render(req,"src/contactMe.html",{})
    elif req.method == "POST":
        name = req.POST.get("name")
        email = req.POST.get("email")
        tag = req.POST.get("tag")
        msg = req.POST.get("msg")

        print(f"\n\n================\nname:{name}\nmail:{email}\ntag:{tag}\nmsg:{msg}\n============================\n\n")

        return render(req,"src/success.html",{})


    else:
        return send_bad_request(req)





# ====================================================================
# ====================================================================
# ======[ BAD ROUTES + TERMS ]========================================
# ====================================================================

# @/terms/
def my_terms(req):
    if req.method == "GET":
        return render(req,"src/terms.html",{})
    else:
        return send_bad_request(req)
    


# undefined patterns
def send_bad_request(req):
    return render(req,"src/error.html",{})
