import { Schema } from 'mongoose';

export let UserSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
},
 // {
 //   versionKey: false, // You should be aware of the outcome after set to false
 // }
);
