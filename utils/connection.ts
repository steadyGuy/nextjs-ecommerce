import mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//mongoose.plugin(beautifyUnique);

// const beautifyUnique = require('mongoose-beautiful-unique-validation');

// mongoose.plugin(beautifyUnique);
export default mongoose.createConnection(process.env.MONGO_DB_URL);
