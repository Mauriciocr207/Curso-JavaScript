import { Model } from "sequelize";

export default class BaseModel extends Model {
    static async getWithLimit(limit = null) {
        return this.findAll({limit});
    }
}