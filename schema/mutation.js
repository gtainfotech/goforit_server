import { GraphQLObjectType } from 'graphql';
import { userMutation } from './users';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...userMutation
    }
});
