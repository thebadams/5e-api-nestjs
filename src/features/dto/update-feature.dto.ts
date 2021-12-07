import { PartialType } from '@nestjs/mapped-types';
import { CreateFeatureDto } from './create-feature.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
