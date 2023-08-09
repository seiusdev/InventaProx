function myFunction() {
  
}

function doGet(e) {
  return HtmlService.createTemplateFromFile("formgs.html").evaluate();
}


function guardarRespuestas(respuestas) {
  var spreadsheetId = '1F6et8beNPo3VyOicSNYtMwcmsVkFuHfVUewAal6SBZw';
  var sheetName = 'Encuesta General de la Empresa';

  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(sheetName);

  sheet.appendRow(respuestas);

  return '¡Respuestas enviadas exitosamente!';
}
