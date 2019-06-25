import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export let SubscriptionsSchema: Schema = new Schema({
  creatorUid: String,
  patronUid: String,
  step: Number,
});

module.exports = mongoose.model('Subscriptions', SubscriptionsSchema);
