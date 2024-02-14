import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import appConfigSchema from './config/app.schema';
import { AppConfigService } from './app.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: appConfigSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
