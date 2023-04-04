import fs, { readFile } from 'fs';
import { savePostalCode, saveMultiple } from './postal-code.service';

const limit = Number(process.env.DATA_PACKAGE_LIMIT || 10000);

class FileJSONReader {
    
    constructor() {
    }

    async readJSONFile() {
        let pathFile = process.env.POSTAL_CODE_RESOURCE_PATH || '';

        fs.readFile(pathFile, "utf8", async(err, data) => {
            if (err) throw err;
            console.log("Reading...");

            let deleteme = [];
            
            let postalCodes: any[] = JSON.parse(data);

            if(postalCodes.length > 0) {
                console.log(`Saving...${postalCodes.length}`);

                // let test = postalCodes.filter((value) => value.postalCode === '72010' && value.countryCode == 'MX');

                if( postalCodes.length > limit ) {
                    
                    let laps = Math.round(postalCodes.length / limit);
                    let init = 0;
                    let end = limit;
                    console.log("Laps: ", laps);

                    for (let index = 0; index < laps; index++) {
                        console.log("Lap nº: ", index + 1);
                        let elementsAux = [];
                        elementsAux = postalCodes.slice(init, end);
                        console.log("size: ", elementsAux.length);
                        await saveMultiple(elementsAux);
                        init = end;
                        end += limit;
                    }
                    
                } else {
                    saveMultiple(postalCodes);
                }
                
                console.log(`Saving Over, check if you have: ${postalCodes.length} on your table :)`);
                // console.log(test);
            }
            console.log("Reading Over...")
        });
        
        
    }
}

export default FileJSONReader;