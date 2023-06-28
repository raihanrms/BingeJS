// this is still work in progress, as I couldn't make it select the dropdown criterias

function onEdit(e) {
    var sheet = e.source.getActiveSheet();
    var range = e.range;
    var row = range.getRow();
    var column = range.getColumn();
  
    if (column === 8 && row > 1 && sheet.getName() === 'Sheet2') {
      var valA = sheet.getRange(row, 9).getValue();
      var valB = sheet.getRange(row, 10).getValue();
      var valC = sheet.getRange(row, 11).getValue();
      var valD = sheet.getRange(row, 8).getValue();
      
      if (valA === '' || valB === '' || valC === '' || valD === '') {
        return; // If any of the values are empty, exit the function without changing the dropdown
      }
      
      var band = calculateBand(valA, valB, valC, valD);
      sheet.getRange(row, 12).setValue(band);
      updateDropdownCriteria(sheet);
    }
  }
  
  function calculateBand(valA, valB, valC, valD) {
    var band = '';
    
    if (valD <= 100 && valA <= 240 && valB <= 165 && valC <= 5) {
      band = 'Small Letter';
    } else if (valD <= 100 && valA <= 250 && valB <= 353 && valC <= 25) {
      if (valD <= 100) {
        band = 'Large Letter (0-100g)';
      } else if (valD <= 250) {
        band = 'Large Letter (101-250g)';
      } else if (valD <= 500) {
        band = 'Large Letter (251-500g)';
      } else if (valD <= 750) {
        band = 'Large Letter (501-750g)';
      }
    } else if (valD <= 2000 && valA <= 350 && valB <= 450 && valC <= 160) {
      if (valD <= 1000) {
        band = 'Small Parcel (750g-1kg)';
      } else if (valD <= 1250) {
        band = 'Small Parcel (1.01-1.25kg)';
      } else if (valD <= 1500) {
        band = 'Small Parcel (1.26-1.5kg)';
      } else if (valD <= 1750) {
        band = 'Small Parcel (1.51-1.75kg)';
      } else if (valD <= 2000) {
        band = 'Small Parcel (1.76-2kg)';
      }
    } else if (valD > 2000 && valA <= 460 && valB <= 610 && valC <= 460) {
      if (valD <= 20000) {
        band = 'Medium Parcel (1.76-2kg)';
      } else {
        band = '2Kg+ Fedex';
      }
    } else {
      band = 'Invalid';
    }
    
    return band;
  }
  
  function updateDropdownCriteria(sheet) {
    var dropdownRange = sheet.getRange('Sheet2!L2');
    var criteria = [
      'Small Letter 0-100g',
      'Large Letter 0-100g',
      'Large Letter 101-250g',
      'Large Letter 251-500g',
      'Large Letter 501-750g',
      'Small Parcel 750g-1kg',
      'Small Parcel 1.01-1.25kg',
      'Small Parcel 1.26-1.5kg',
      'Small Parcel 1.51-1.75kg',
      'Small Parcel 1.76-2kg',
      '2Kg+ Fedex',
      'Medium Parcel 1.76-2kg'
    ];
    
    dropdownRange.clearContent();
    dropdownRange.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(criteria).build());
  }
  