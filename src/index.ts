import Server from "./models/server";
import FileJSONReader from "./services/file-json-reader.service";
import dotenv from 'dotenv';
dotenv.config();

console.log('Welcome to the migration tool!!')

const server = new Server();
const fileReader = new FileJSONReader();

server.dbConnection().then(()=> {
    fileReader.readJSONFile();
});
