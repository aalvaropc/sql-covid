from rest_framework import serializers
from .models import Clasificacion, DatosSalud, Paciente, Sexo, TipoPaciente

class ClasificacionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Clasificacion
    fields = '__all__'

class DatosSaludSerializer(serializers.ModelSerializer):
  class Meta:
    model = DatosSalud
    fields = '__all__'

class PacienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Paciente
    fields = '__all__'

class SexoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sexo
    fields = '__all__'

class TipoPacienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = TipoPaciente
    fields = '__all__'