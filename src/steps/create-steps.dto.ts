export class CreateStepsDto {
  readonly creatorUid: string;
  readonly steps: [{
    readonly price: number;
    readonly description: string;
    readonly patronsNum: number;
    readonly additions: {
      readonly videoId: string;
      readonly pictureUrl: string;
      readonly text: string;
    };
  }];
}
