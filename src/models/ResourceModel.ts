import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface ResourceAttributes {
    id?: number;
    name?: string;
    active?: boolean;
    description?: string;
}

export interface ResourceInstance extends Sequelize.Instance<ResourceAttributes>, ResourceAttributes { };

export interface ResourceModel extends BaseModelInterface, Sequelize.Model<ResourceInstance, ResourceAttributes> { };

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
    const Resource: ResourceModel = sequelize.define('Resource', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            primaryKey: false
        },
        method: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
    }, {
        tableName: 'resources',
    });

    return Resource;
};