from django.shortcuts import render
from .models import Sexo, Clasificacion, DatosSalud, Paciente, TipoPaciente
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ClasificacionSerializer, DatosSaludSerializer, PacienteSerializer, SexoSerializer, TipoPacienteSerializer

class SexoView(APIView):
    def get(self, request):
        queryset = Sexo.objects.all()
        serializer = SexoSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ClasificacionView(APIView):
    def get(self, request):
        queryset = Clasificacion.objects.all()
        serializer = ClasificacionSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DatosSaludView(APIView):
    def get(self, request):
        queryset = DatosSalud.objects.all()
        serializer = DatosSaludSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PacienteView(APIView):
    def get(self, request):
        queryset = Paciente.objects.all()
        serializer = PacienteSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TipoPacienteView(APIView):
    def get(self, request):
        queryset = TipoPaciente.objects.all()
        serializer = TipoPacienteSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)