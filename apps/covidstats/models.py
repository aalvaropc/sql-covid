from django.db import models

class Sexo(models.Model):
    NombreSexo = models.CharField(max_length=50)

    def __str__(self):
        return self.NombreSexo

class Clasificacion(models.Model):
    NombreClasificacion = models.CharField(max_length=255)

    def __str__(self):
        return self.NombreClasificacion

class TipoPaciente(models.Model):
    NombreTipoPaciente = models.CharField(max_length=255)

    def __str__(self):
        return self.NombreTipoPaciente

class Paciente(models.Model):
    Sexo = models.ForeignKey(Sexo, on_delete=models.CASCADE)
    Edad = models.IntegerField()
    FechaFallecimiento = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'Paciente {self.id}'

class DatosSalud(models.Model):
    Paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    Clasificacion = models.ForeignKey(Clasificacion, on_delete=models.CASCADE)
    TipoPaciente = models.ForeignKey(TipoPaciente, on_delete=models.CASCADE)
    Neumonia = models.IntegerField()
    Embarazo = models.IntegerField()
    Diabetes = models.IntegerField()
    COPD = models.IntegerField()
    Asma = models.IntegerField()
    Inmunodepresion = models.IntegerField()
    Hipertension = models.IntegerField()
    EnfermedadCardiovascular = models.IntegerField()
    EnfermedadRenalCronica = models.IntegerField()
    OtraEnfermedad = models.IntegerField()
    Obesidad = models.IntegerField()
    Tabaco = models.IntegerField()
    USMR = models.IntegerField()
    Intubado = models.IntegerField()
    UCI = models.IntegerField()

    def __str__(self):
        return f'Datos de salud de Paciente {self.Paciente_id}'
