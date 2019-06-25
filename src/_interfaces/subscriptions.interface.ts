import { Document } from 'mongoose';

export interface SubscriptionsInterface extends Document {
  readonly creatorUId: string;
  readonly patronUid: string;
  readonly step: number;
}
