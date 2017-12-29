import { makeExecutableSchema } from 'graphql-tools';
import { Query } from './query';
import { Mutation } from './mutation';
import { userMutations, userTypes } from './resources/user/user.schema';

const SchemaDefinition = `
    type Schema {
        query: Query,
        mutation: Mutation
    }
`;

export default makeExecutableSchema({ 
    typeDefs: [
        Query,
        Mutation,
        userTypes,
        SchemaDefinition
    ] 
});