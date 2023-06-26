function generateCustomURL() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    var cellBRange = sheet.getRange("B2:B" + lastRow);
    var cellCRange = sheet.getRange("C2:C" + lastRow);
    var cellDRange = sheet.getRange("D2:D" + lastRow);
  
    var cellBValues = cellBRange.getValues();
    var cellCValues = cellCRange.getValues();
    var cellDValues = cellDRange.getValues();
  
    var resultValues = [];
  
    for (var i = 0; i < cellBValues.length; i++) {
      var cellB = cellBValues[i][0];
      var cellC = cellCValues[i][0];
  
      var result = "";
  
      if (cellB && cellC) {
        var cleanedC = cellC.replace(/_/g, "-").replace(/ /g, "-");
        result = "https://www.electricals247.co.uk/" + cleanedC + "-" + cellB;
      }
  
      resultValues.push([result]);
    }
  
    var resultRange = sheet.getRange("D2:D" + lastRow);
    resultRange.setValues(resultValues);
  }
  
  function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var user = Session.getActiveUser();
  
    if (user) {
      generateCustomURL();
    }
  }