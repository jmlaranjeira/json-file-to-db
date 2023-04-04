import PostalCode from "../models/postal-code";

export const savePostalCode = async(body: any) => {
    try {
        const postalCode = await PostalCode.create(body);
        await postalCode.save();
        
    } catch(error) {
        console.log(error);
        throw new Error('Saving error!');
    }
}

export const saveMultiple = async(elements: any) => {
    try {
        await PostalCode.bulkCreate(elements).then(() => {
            console.log("Bulk finished!!")
        }).catch((error) => {
            console.error(error);
            throw new Error('Bulk saving error!');
        });
    } catch(error) {
        console.log(error);
        throw new Error('Bulk saving error!');
    }
}