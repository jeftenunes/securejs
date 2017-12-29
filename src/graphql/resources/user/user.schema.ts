import Role from '../../../models/RoleModel';

const userTypes = `
    type User {
        id: ID!
        email: String!
        active: Boolean!
        password: String!
        username: String!
        lastName: String!
        createdAt: String!
        updatedAt: String!
        firstName: String!
        roles: [Role]
    }

    input UserCreateInput {
        email: String!
        active: Boolean!!
        username: String!
        lastName: String!
        firstName: String!
    }

    input UserUpdateInput {
        email: String!
        username: String!
        lastName: String!
        firstName: String!
    }

    input UserUpdateRolesInput {
        roles: [Role]!
    }

    input UserUpdatePasswordInput {
        password: String!
    }

    input UserUpdateStatusInput {
        active: Boolean!
    }
`;

const userQueries = `
    user(id: ID!): User
    users(first: Int, offset: Int): [ User! ]!
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    updateUserRoles(id: ID!, input: UserUpdateRolesInput): User
    updateUserStatur(id: ID!, input: UserUpdateStatusInput): User
    updateUserPassword(id: ID!, input: UserUpdatePasswordInput): User
    deleteUser(id: ID!): Boolean
`;

export {
    userTypes,
    userQueries,
    userMutations
};