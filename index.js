  const { GoogleSpreadsheet } = require('google-spreadsheet');
  
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('************************');

  (async function() {


  console.log(doc.title);
  await doc.updateProperties({ title: 'renamed doc' });
  
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  await sheet.addRows([
      { Title: 'Software Engineer', Location: 'SF' },
      { Title: 'Designger', Location: 'NY' },
    ]);
})()