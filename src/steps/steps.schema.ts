import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export let StepsSchema: Schema = new Schema({
  creatorUid: {
    type: String,
    required: true,
  },
  steps: [{
    price: Number,
    description: String,
    patronsNum: Number,
    additions: {
      videoId: String,
      pictureUrl: String,
      text: String,
    },
  }],
});

module.exports = mongoose.model('Steps', StepsSchema);
