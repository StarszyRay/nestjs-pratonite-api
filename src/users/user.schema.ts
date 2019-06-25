import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export let UserSchema: Schema = new Schema({
  uid: String,
  email: String,
  visibleName: String,
  avatar: String,
  name: String,
  surname: String,
  role: String,
  creatorFields: {
    description: String,
    tags: [String],
    specialization: String,
  },
});

UserSchema.methods.toJSON = function() {
  return this.toObject();
};

module.exports = mongoose.model('User', UserSchema);
