import { savePostalCode } from "../controller/postal-code";
import db from "../db/connection";


class Server {

    constructor() {
        // this.dbConnection();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online...");
        } catch(error: any) { 
            throw new Error(error.message);
        }
    }
}

export default Server;