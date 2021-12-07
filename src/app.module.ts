import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/5eAPI?readPreference=primary&ssl=false',
    ),
    FeaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
