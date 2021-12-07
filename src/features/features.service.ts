import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.featureModel.create(feature);
  }

  async findAll() {
    return this.featureModel.find();
  }

  async findById(id: string) {
    const feature = await this.featureModel.findById(id);
    if (!feature) {
      throw new NotFoundException('No Feature With That ID Found');
    }
    return feature;
  }

  async update(id: string, attrs: UpdateFeatureDto) {
    return this.featureModel.findByIdAndUpdate(id, attrs, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.featureModel.findByIdAndDelete(id);
  }
}
