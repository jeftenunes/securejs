import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface PermissionAttributes {
    id?: number;
    name?: string;
    active?: boolean;
    description?: string;
}

export interface PermissionInstance extends Sequelize.Instance<PermissionAttributes>, PermissionAttributes { };

export interface PermissionModel extends BaseModelInterface, Sequelize.Model<PermissionInstance, PermissionAttributes> { };

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
    const Permission: PermissionModel = sequelize.define('Permission', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            primaryKey: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            primaryKey: false
        },
    }, {
        tableName: 'permissions',
    });

    Permission.associate = (models: ModelsInterface): void => {
        Permission.hasOne(models.Resource, {
            foreignKey: {
                name: 'permissionId',
                allowNull: false,
              },
              as: 'resource'
        });
    };

    return Permission;
};