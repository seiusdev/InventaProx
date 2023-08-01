function doGet() {
  return HtmlService.createHtmlOutputFromFile("formgs.html");
}

function guardarRespuestas(formgsData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timeStamp = new Date();

   var respuestas = [timeStamp];

  // Definir el número total de preguntas que tienes (en este caso, 47 preguntas)
  var totalPreguntas = 50;
  // Utilizar un bucle for para obtener todas las respuestas
  for (var i = 0; i < totalPreguntas; i++) {
    var nombrePregunta = 'pregunta' + i;
    var respuesta = formData[nombrePregunta];
    respuestas.push(respuesta);
  }
  // Agregar las respuestas a la hoja de cálculo
  sheet.appendRow(respuestas);
}