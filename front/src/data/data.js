const datos = [
  {
    askId: "1",
    title: "¿Cuántos pacientes han sido diagnosticados con COVID-19 en cada nivel de clasificación?",
    content: "Esta pregunta busca proporcionar una distribución de la gravedad de los casos de COVID-19. Es importante para entender cómo se distribuyen los pacientes en diferentes niveles de gravedad.",
    respuesta: `SELECT c.NombreClasificacion, COUNT(*) AS CantidadPacientes
FROM DatosSalud ds
JOIN Clasificaciones c ON ds.ClasificacionID = c.ClasificacionID
GROUP BY c.NombreClasificacion;`
  },
  {
    askId: "2",
    title: "¿Cuál es la condición médica más común entre los pacientes diagnosticados con COVID-19?",
    content: "Esta pregunta busca identificar la condición médica más común entre los pacientes con COVID-19. Proporciona información sobre qué afecciones subyacentes podrían estar más relacionadas con la infección.",
    respuesta: `SELECT
    CASE
        WHEN SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) 
             AND SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Obesidad = 1 THEN 1 ELSE 0 END) THEN 'Diabetes'
        WHEN SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) 
             AND SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Obesidad = 1 THEN 1 ELSE 0 END) THEN 'Hipertensión'
        ELSE 'Obesidad'
    END AS CondicionComun,
    CASE
        WHEN SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) 
             AND SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Obesidad = 1 THEN 1 ELSE 0 END) THEN SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END)
        WHEN SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Diabetes = 1 THEN 1 ELSE 0 END) 
             AND SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END) >= SUM(CASE WHEN Obesidad = 1 THEN 1 ELSE 0 END) THEN SUM(CASE WHEN Hipertension = 1 THEN 1 ELSE 0 END)
        ELSE SUM(CASE WHEN Obesidad = 1 THEN 1 ELSE 0 END)
    END AS Cantidad
FROM DatosSalud;`
  },
  {
    askId: "3",
    title: "¿Cuál es el tipo de paciente más común en términos de atención recibida?",
    content: "Esta pregunta analiza la distribución de los tipos de pacientes según la atención recibida. Puede dar información sobre cómo se asigna la atención médica según los diferentes tipos de pacientes.",
    respuesta: `SELECT TOP 1 WITH TIES
	tp.NombreTipoPaciente AS TipoPaciente, COUNT(*) AS Cantidad
FROM DatosSalud ds
JOIN TiposPaciente tp ON ds.TipoPacienteID = tp.TipoPacienteID
GROUP BY tp.NombreTipoPaciente
ORDER BY Cantidad DESC;`
  },
  {
    askId: "4",
    title: "¿Cuál es el número de pacientes fallecidos por grupo de edad?",
    content: "Esta pregunta explora el número de pacientes fallecidos en diferentes grupos de edad. Ayuda a entender cómo la edad influye en el riesgo de mortalidad por COVID-19.",
    respuesta: `SELECT
    CASE
        WHEN Edad <= 20 THEN '0-20'
        WHEN Edad <= 40 THEN '21-40'
        WHEN Edad <= 60 THEN '41-60'
        ELSE '61+'
    END AS GrupoEdad,
    COUNT(*) AS CantidadPacientesFallecidos
FROM Pacientes
GROUP BY
    CASE
        WHEN Edad <= 20 THEN '0-20'
        WHEN Edad <= 40 THEN '21-40'
        WHEN Edad <= 60 THEN '41-60'
        ELSE '61+'
    END
ORDER BY GrupoEdad;`
  },
  {
    askId: "5",
    title: "¿Cuál es el perfil más frecuente de paciente con obesidad diagnosticado con COVID-19?",
    content: "Esta pregunta busca entender cómo se distribuyen los pacientes con obesidad en diferentes perfiles de atención médica. Puede proporcionar información sobre qué tipos de pacientes obesos están siendo diagnosticados con COVID-19.",
    respuesta:`SELECT TOP 1 WITH TIES
    tp.NombreTipoPaciente,
    COUNT(*) AS CantidadPacientesObesos
FROM Pacientes p
JOIN DatosSalud ds ON p.PacienteID = ds.PacienteID
JOIN TiposPaciente tp ON ds.TipoPacienteID = tp.TipoPacienteID
WHERE ds.Obesidad = 1
GROUP BY tp.NombreTipoPaciente
ORDER BY CantidadPacientesObesos DESC;`
  },
];

export default datos;