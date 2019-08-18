import { GraphQLObjectType } from 'graphql';
import { userQuery } from './users';

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...userQuery
    }
});
