import graphql, { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import UserResolver from '../resolvers/UserResolver';

const userFields = {
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  email: { type: GraphQLString },
};

// Define the User type
const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    ...userFields,
  }
});

// Define the Query type
const userQuery = {
  user: {
    type: User,
    args: {
      id: { type: GraphQLInt }
    },
    resolve: (root, args) => UserResolver.user(args)
  },
  users: {
    type: GraphQLList(User),
    resolve: (root, args) => UserResolver.users(args)
  }
};

const userMutation = {
  createUser: {
    type: User,
    args: userFields,
    resolve: (root, args) => UserResolver.createUser(args)
  },
  updateUser: {
    type: User,
    args: {
      id: { type: GraphQLInt },
      ...userFields,
    },
    resolve: (root, args) => UserResolver.updateUser(args)
  }
}

export { userQuery, userMutation };