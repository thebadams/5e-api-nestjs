import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FeaturesService } from './features.service';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Post()
  create(@Body() body: CreateFeatureDto) {
    return this.featuresService.create(body);
  }

  @Get()
  findAll() {
    return this.featuresService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.featuresService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featuresService.update(+id, updateFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featuresService.remove(+id);
  }
}
