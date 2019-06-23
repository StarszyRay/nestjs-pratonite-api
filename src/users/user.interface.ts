import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly uid: string;
  readonly email: string;
  readonly visibleName: string;
  readonly avatar: string;
  readonly name: string;
  readonly surname: string;
  readonly role: string;
}
