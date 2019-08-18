import models from './index';

const User = models.loadSchema('User', {
  fields: {
    id: {
        type: "uuid",
        default: {"$db_function": "uuid()"}
    },
    firstName: 'varchar',
    lastName: 'varchar',
    email: 'varchar',
    created: {
      type: 'timestamp',
      default: { '$db_function': 'toTimestamp(now())' }
    }
  },
  key: ['id'],
  
});

export default User;
