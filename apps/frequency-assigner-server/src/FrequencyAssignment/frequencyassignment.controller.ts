import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FrequencyAssignmentService } from "./frequencyassignment.service";
import { FrequencyAssignmentResult } from "../frequencyAssignment/FrequencyAssignmentResult";

@swagger.ApiTags("frequencyAssignments")
@common.Controller("frequencyAssignments")
export class FrequencyAssignmentController {
  constructor(protected readonly service: FrequencyAssignmentService) {}

  @common.Post("/frequency/allocate")
  @swagger.ApiOkResponse({
    type: FrequencyAssignmentResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignDistinctFrequencies(
    @common.Body()
    body: string
  ): Promise<FrequencyAssignmentResult[]> {
        return this.service.AssignDistinctFrequencies(body);
      }

  @common.Get("/:id/assign-most-distinct-frequencies")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignMostDistinctFrequencies(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AssignMostDistinctFrequencies(body);
      }
}
