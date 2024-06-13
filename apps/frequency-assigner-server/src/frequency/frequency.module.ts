import { Module } from "@nestjs/common";
import { FrequencyModuleBase } from "./base/frequency.module.base";
import { FrequencyService } from "./frequency.service";
import { FrequencyController } from "./frequency.controller";
import { FrequencyResolver } from "./frequency.resolver";

@Module({
  imports: [FrequencyModuleBase],
  controllers: [FrequencyController],
  providers: [FrequencyService, FrequencyResolver],
  exports: [FrequencyService],
})
export class FrequencyModule {}
