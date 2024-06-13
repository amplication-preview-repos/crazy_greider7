import { Module } from "@nestjs/common";
import { FrequencyAssignmentService } from "./frequencyassignment.service";
import { FrequencyAssignmentController } from "./frequencyassignment.controller";
import { FrequencyAssignmentResolver } from "./frequencyassignment.resolver";

@Module({
  controllers: [FrequencyAssignmentController],
  providers: [FrequencyAssignmentService, FrequencyAssignmentResolver],
  exports: [FrequencyAssignmentService],
})
export class FrequencyAssignmentModule {}
