import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export let UserSchema: Schema = new Schema({
  uid: {type: String, select: true },
  email: String,
  visibleName: String,
  avatar: String,
  name: String,
  surname: String,
  role: String,
});

UserSchema.methods.toJSON = function() {
  let obj = this.toObject();
  return obj;
}
module.exports = mongoose.model('User', UserSchema);
