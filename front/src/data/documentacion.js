const SEXO_DATA = [
  {
    column: "SexoID",
    description: "Identificador único del género en la tabla 'Sexo'",
  },
  {
    column: "NombreSexo",
    description: "Representa el género del paciente",
  },
];
const CLASIFICACIONES_DATA = [
  {
    column: "ClasificacionID",
    description: "Identificador único de la clasificación en la tabla 'Clasificaciones'",
  },
  {
    column: "NombreClasificacion",
    description: "Describe el resultado de la prueba de COVID-19",
  },
];

const TIPOS_PACIENTE_DATA = [
  {
    column: "TipoPacienteID",
    description: "Identificador único del tipo de paciente en la tabla 'TiposPaciente'",
  },
  {
    column: "NombreTipoPaciente",
    description: "Describe el tipo de atención recibida por el paciente en la unidad de salud",
  },
];

const DATOS_SALUD_DATA = [
  {
    column: "DatosSaludID",
    description: "Identificador único de los datos de salud en la tabla 'DatosSalud'",
  },
  {
    column: "PacienteID",
    description: "Referencia al paciente al que pertenecen estos datos en la tabla 'Pacientes'",
  },
  {
    column: "ClasificacionID",
    description: "Referencia a la clasificación de diagnóstico en la tabla 'Clasificaciones'",
  },
  {
    column: "TipoPacienteID",
    description: "Referencia al tipo de paciente en la tabla 'TiposPaciente'",
  },
  {
    column: "Neumonia",
    description: "Si el paciente ya tiene inflamación de los sacos aéreos o no",
  },
  {
    column: "Embarazo",
    description: "Si la paciente está embarazada o no",
  },
  {
    column: "Diabetes",
    description: "Si el paciente tiene diabetes o no",
  },
  {
    column: "COPD",
    description: "Indica si el paciente tiene Enfermedad Pulmonar Obstructiva Crónica o no",
  },
  {
    column: "Asma",
    description: "Si el paciente tiene asma o no",
  },
  {
    column: "Inmunodepresion",
    description: "Si el paciente está inmunodeprimido o no",
  },
  {
    column: "Hipertension",
    description: "Si el paciente tiene hipertensión o no",
  },
  {
    column: "EnfermedadCardiovascular",
    description: "Si el paciente tiene una enfermedad relacionada con el corazón o los vasos sanguíneos",
  },
  {
    column: "EnfermedadRenalCronica",
    description: "Si el paciente tiene enfermedad renal crónica o no",
  },
  {
    column: "OtraEnfermedad",
    description: "Si el paciente tiene otra enfermedad o no",
  },
  {
    column: "Obesidad",
    description: "Si el paciente es obeso o no",
  },
  {
    column: "Tabaco",
    description: "Si el paciente es consumidor de tabaco",
  },
  {
    column: "USMR",
    description: "Indica si el paciente atendió unidades médicas de primer, segundo o tercer nivel",
  },
  {
    column: "Intubado",
    description: "Si el paciente estaba conectado al ventilador",
  },
  {
    column: "UCI",
    description: "Indica si el paciente había sido ingresado en una Unidad de Cuidados Intensivos",
  },
];

const PACIENTES_DATA = [
  {
    column: "PacienteID",
    description: "Identificador único del paciente en la tabla 'Pacientes'",
  },
  {
    column: "SexoID",
    description: "Referencia al género del paciente en la tabla 'Sexo'",
  },
  {
    column: "Edad",
    description: "Edad del paciente",
  },
  {
    column: "FechaFallecimiento",
    description: "Fecha en que el paciente falleció",
  },
];

export {CLASIFICACIONES_DATA,  DATOS_SALUD_DATA, PACIENTES_DATA, SEXO_DATA, TIPOS_PACIENTE_DATA}