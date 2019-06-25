import { Document } from 'mongoose';

export interface StepsInterface extends Document {
  readonly creatorUid: string;
  readonly steps: [{
    readonly price: number;
    readonly description: string;
    patronsNum: number;
    readonly additions: {
      readonly videoId: string;
      readonly pictureUrl: string;
      readonly text: string;
    };
  }];
}
