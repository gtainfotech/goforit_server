import User from '../models/User';

const users = [
    {
        id: 1,
        firstName: 'Kenneth',
        lastName: 'Onah',
        email: 'kenzdozz@aol.com',
    },
    {
        id: 2,
        firstName: 'Charles',
        lastName: 'Onah',
        email: 'kenzdozz@gmail.com',
    },
    {
        id: 3,
        firstName: 'Chidozie',
        lastName: 'Onah',
        email: 'kenzdozz@live.com',
    },
]

class UserService {
  /**
   * 
   * @param {number} id 
   * @returns {User}
   */
  async get(id) {
    const user = users.find(item => item.id === id);
    if (!user) return null;
    return new User(user.id, user.firstName, user.lastName);
  }

  /**
   * 
   * @returns {[User]}
   */
  async findAll() {
      return users.map(user => new User(user.id, user.firstName, user.lastName));
  }

  /**
   * 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {User}
   */
  async create(firstName, lastName) {
    const user = new User({
      firstName,
      lastName
    });
    await user.save();
    console.log(user);
    
    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      firstName,
      lastName,
    })
    return new User(id, firstName, lastName);
  }

  /**
   * 
   * @param {number} id 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {User}
   */
  async update(id, firstName, lastName) {
    const user = users.find(item => item.id === id);
    user.firstName = firstName;
    user.lastName = lastName;
    return this.get(id);
  }
}

export default new UserService();
