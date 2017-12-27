import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface RoleAttributes {
    id?: number;
    name?: string;
    active?: boolean;
    description?: string;
}

export interface RoleInstance extends Sequelize.Instance<RoleAttributes>, RoleAttributes { };

export interface RoleModel extends BaseModelInterface, Sequelize.Model<RoleInstance, RoleAttributes> { };

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
    const Role: RoleModel = sequelize.define('Role', {
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
        tableName: 'roles',
    });

    Role.associate = (models: ModelsInterface): void => {
        Role.hasMany(models.Permission, {
            foreignKey: {
                name: 'roleId',
                allowNull: false,
              },
              as: 'permissions'
        });
    };

    return Role;
};