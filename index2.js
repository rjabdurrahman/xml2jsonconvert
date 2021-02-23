const xml2js = require('xml2js');

// XML string to be parsed to JSON
const xml = require('fs').readFileSync('./data2.xml', 'utf8');

// convert XML to JSON
xml2js.parseString(xml, (err, result) => {
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

    // log JSON string
    console.log(json);
    
});