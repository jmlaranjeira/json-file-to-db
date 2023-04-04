import { randomBytes, randomUUID, RandomUUIDOptions } from "crypto";
import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import db from "../db/connection";
import { v4 as uuidv4 } from 'uuid';

const PostalCode = db.define('postal_code', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue() {
            let value = uuidv4();
            return Sequelize.literal(`UNHEX(REPLACE('${value}','-', ''))`);
        }
    },
    countryCode: {
        type: DataTypes.CHAR,
        field: 'country_code',
        allowNull: false
    },
    postalCode: {
        type: DataTypes.CHAR,
        field: 'postal_code',
        allowNull: false,
        set( value: string ) {
            value = value.replace(/[^\d]/g, "");
            this.setDataValue('postalCode', value);
        }
    },
    placeName: {
        type: DataTypes.STRING,
        field: 'place_name',
        allowNull: false,
        set( value: string ) {
            value = value.replace(/['",“]+/g, '');
            this.setDataValue('placeName', value);
        }
    },
    latitude: {
        type: DataTypes.DOUBLE,
        field: 'latitude'
    },
    longitude: {
        type: DataTypes.DOUBLE,
        field: 'longitude'
    }
});

export default PostalCode;