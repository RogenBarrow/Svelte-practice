import getSupaData from "./supabaseData";
import * as fs from 'node:fs';



async function safeData() {
    
    const result = await getSupaData();
    const jsonData = JSON.stringify(result, null, 2);
    console.log("This data will be stored in json file: ", jsonData);
    
    //create file to store result
    const filePath = './src/lib/data.json'
    fs.writeFileSync(filePath, jsonData, 'utf-8',);

    return safeData;
}

export default safeData;
