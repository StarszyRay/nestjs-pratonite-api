import { CreatorInterface } from '../_interfaces/creator.interface';

export class CreateUserDto {
  readonly uid: string;
  readonly email: string;
  readonly visibleName: string;
  readonly avatar: string;
  readonly name: string;
  readonly surname: string;
  readonly role: string;
  readonly creatorFields: CreatorInterface;
}
