import { DataTypes } from "sequelize";
import sequelize from "../db/init.js";
import BaseModel from "./baseModel.js";

export default class Viaje extends BaseModel {}

Viaje.init({
    titulo: {type: DataTypes.STRING},
    precio: {type: DataTypes.STRING},
    fecha_ida: {type: DataTypes.DATE},
    fecha_vuelta: {type: DataTypes.DATE},
    imagen: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    disponibles: {type: DataTypes.STRING},
    slug: {type: DataTypes.STRING}
},{
    sequelize,
    modelName: 'viaje'
})