import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feature, FeatureDocument } from './schemas/feature.schema';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';

@Injectable()
export class FeaturesService {
  constructor(
    @InjectModel(Feature.name) private featureModel: Model<FeatureDocument>,
  ) {}
  async create(feature: CreateFeatureDto): Promise<Feature> {
    const newFeature = new this.featureModel(feature);
    return newFeature.save();
  }

  findAll() {
    return `This action returns all features`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feature`;
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    return `This action updates a #${id} feature`;
  }

  remove(id: number) {
    return `This action removes a #${id} feature`;
  }
}
