import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync, genSalt } from 'bcryptjs';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface UserAttributes {
    id?: number;
    email?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    password?: string;
    username?: string;
    lastName?: string;
    firstName?: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
    verifyPassword(encodedPassword: string, inputPassword: string): boolean;
}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
    const User: UserModel = 
        sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
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
            username: {
                type: DataTypes.STRING(128),
                allowNull: false,
                primaryKey: false
            },
            lastName: {
                type: DataTypes.STRING(128),
                allowNull: false,
                primaryKey: false
            },
            firstName: {
                type: DataTypes.STRING(128),
                allowNull: false,
                primaryKey: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: false,
                validate: {
                    notEmpty: true,
                }
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        }, {
            tableName: 'users',
            hooks: {
                beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions): void => {
                    user.password = hashSync(user.password, genSaltSync());
                }
            }
        });

        User.prototype.verifyPassword = (encodedPassword: string, inputPassword: string): boolean => 
            compareSync(inputPassword, encodedPassword);

    return User;
};