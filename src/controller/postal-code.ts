import PostalCode from "../models/postal-code"


export const getAllPostalCodes = async() => {

    const postalCodes = await PostalCode.findAll();

    console.log(postalCodes);
}

export const getPostalCode = async( countryCode: string = '', postalCode: string = '' ) => {

    const postalCodes = await PostalCode.findOne( { where: { countryCode, postalCode } } );

    console.log(postalCodes?.dataValues);
}

export const getCity = async( countryCode: string = '', postalCode: string = '' ) => {

    const postalCodes = await PostalCode.findOne( { where: { countryCode, postalCode } } );

    console.log(postalCodes?.dataValues.placeName);
}

export const savePostalCode = async(body: any) => {

    // const body = {
    //     "countryCode": "JP",
    //     "placeName": "Tano",
    //     "postalCode": "569-1002",
    //     "latitude": 34.8717,
    //     "longitude": 135.6013
    // };

    try {
        const postalCode = await PostalCode.create(body);
        await postalCode.save();
        
    } catch(error) {
        console.log(error);
    }
}