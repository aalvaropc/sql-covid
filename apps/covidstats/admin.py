from django.contrib import admin
from .models import Clasificacion, Sexo, Paciente, DatosSalud, TipoPaciente

@admin.register(Clasificacion)
class ClasificacionAdmin(admin.ModelAdmin):
    list_display = ('id', 'NombreClasificacion')

@admin.register(Sexo)
class SexoAdmin(admin.ModelAdmin):
    list_display = ('id', 'NombreSexo')

@admin.register(Paciente)
class PacienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'Sexo', 'Edad', 'FechaFallecimiento')

@admin.register(DatosSalud)
class DatosSaludAdmin(admin.ModelAdmin):
    list_display = ('id', 'Paciente', 'Clasificacion')

@admin.register(TipoPaciente)
class TipoPacienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'NombreTipoPaciente')
