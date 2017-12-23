import * as Sequelize from "sequelize";
import { ModelsInterface } from "./ModelsInterface";

export interface DbContext extends ModelsInterface {
    sequelize: Sequelize.Sequelize;
}