import { Document } from 'mongoose';

export interface SubscriptionsInterface extends Document {
  readonly creatorUid: string;
  readonly patronUid: string;
  readonly step: number;
}
