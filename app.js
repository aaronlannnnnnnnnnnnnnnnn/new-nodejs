const fs = require('fs');

fs.readFile('pokemon.csv', (err, data) => {

    let objLog;
    let final = [];
    let objArray = data.toString().split("\r\n")
    for (let i = 0; i < objArray.length; i++) {
        let t = objArray[i].split(",");
        newJson = {
            "id": t[0],
            "name": t[1],
            "type1": t[2],
            "type2": t[3]
        }
        final.push(newJson)
    }
    //console.log(final)
    console.log(JSON.stringify(final, null, "\t"))
});