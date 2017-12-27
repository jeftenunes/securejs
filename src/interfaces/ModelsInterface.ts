import { UserModel } from "../models/UserModel";
import { RoleModel } from "../models/RoleModel";
import { PermissionModel } from "../models/PermissionModel";
import { ResourceModel } from "../models/ResourceModel";

export interface ModelsInterface {
    User: UserModel;
    Role: RoleModel;
    Resource: ResourceModel;
    Permission: PermissionModel;
}