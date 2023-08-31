# from django.urls import path, include
# from rest_framework import routers
# from apps.covidstats import views

# router = routers.DefaultRouter()
# router.register(r'clasificacions', views.ClasificacionView, basename='clasificacion')
# router.register(r'datossaluds', views.DatosSaludView, basename='datossalud')
# router.register(r'sexos', views.SexoView, basename='sexo')
# router.register(r'pacientes', views.PacienteView, basename='paciente')
# router.register(r'tipopacientes', views.TipoPacienteView, basename='tipopaciente')

# urlpatterns = [
#     path('api/', include(router.urls)),
# ]

# from rest_framework.routers import DefaultRouter
# from .views import SexoView, ClasificacionView, DatosSaludView, PacienteView, TipoPacienteView

# router = DefaultRouter()
# router.register(r'sexos', SexoView, basename='sexos')
# router.register(r'clasificacions', ClasificacionView, basename='clasificacions')
# router.register(r'datossaluds', DatosSaludView, basename='datossaluds')
# router.register(r'pacientes', PacienteView, basename='pacientes')
# router.register(r'tipopacientes', TipoPacienteView, basename='tipopacientes')

# urlpatterns = router.urls

from django.urls import path
from apps.covidstats.views import SexoView, ClasificacionView, DatosSaludView, PacienteView, TipoPacienteView

urlpatterns = [
    path('api/sexos/', SexoView.as_view(), name='sexos'),
    path('api/clasificacions/', ClasificacionView.as_view(), name='clasificacions'),
    path('api/datossaluds/', DatosSaludView.as_view(), name='datossaluds'),
    path('api/pacientes/', PacienteView.as_view(), name='pacientes'),
    path('api/tipopacientes/', TipoPacienteView.as_view(), name='tipopacientes'),
]