from rest_framework import routers
from .api import LeadViewSet

# defining our router instance to create our route urls
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

# defining our url patterns which is just set to the router urls 
urlpatterns = router.urls