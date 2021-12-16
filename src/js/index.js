const {
    Action,
    ActionType,
    AvailableAction,
    AvailableFor,
    Category,
    DataFile,
    Dataset,
    Grant,
    MetadataKey,
    MetadataValue,
    Role,
    State,
    Type,
    User,
  } = require('./models/model');
  
  (async () => {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 4));
  
    const dasha = User.create({ name: 'Dan', password: '321parol' });
  })();