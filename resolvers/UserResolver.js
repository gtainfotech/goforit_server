import UserService from '../services/UserService';

class UserResolver {
  async users(args) {
    const users = await UserService.findAll();
    return users;
  }

  async user(args) {
    const user = await UserService.get(args.id);
    return user;
  }

  async createUser(args) {
    const user = await UserService.create(args.firstName, args.lastName);
    return user;
  }

  async updateUser(args) {
    const user = await UserService.update(args.id, args.firstName, args.lastName);
    return user;
  }
}

export default new UserResolver();