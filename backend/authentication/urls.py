from django.urls import include, path
from rest_framework.routers import DefaultRouter

from authentication.api.viewsets.registration_viewset import RegistrationViewSet

router = DefaultRouter()
router.register("auth/register", RegistrationViewSet, basename="registration")

urlpatterns = [
    path("", include(router.urls)),
]
