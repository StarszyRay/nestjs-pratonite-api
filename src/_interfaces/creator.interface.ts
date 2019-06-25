import { Document } from 'mongoose';

export interface CreatorInterface extends Document {
  readonly tags: string[];
  readonly description: string;
  readonly specialization: string;
}
