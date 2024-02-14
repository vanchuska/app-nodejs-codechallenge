import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(appConfig.KEY)
    public readonly config: ConfigType<typeof appConfig>,
  ) {}
}
