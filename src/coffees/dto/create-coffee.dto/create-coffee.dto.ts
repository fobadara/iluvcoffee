import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly brand: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ each: true })
  readonly flavors: string[];
}
