import { DataTypes } from "sequelize";
import sequelize from "../db/init.js";
import BaseModel from "./baseModel.js";

export default class Testimonial extends BaseModel {}

Testimonial.init({
    nombre: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    mensaje: {type: DataTypes.TEXT},
},{
    sequelize,
    modelName: 'testimoniales'
})