import * as graphql from "@nestjs/graphql";
import { FrequencyAssignmentResult } from "../frequencyAssignment/FrequencyAssignmentResult";
import { FrequencyAssignmentService } from "./frequencyassignment.service";

export class FrequencyAssignmentResolver {
  constructor(protected readonly service: FrequencyAssignmentService) {}

  @graphql.Mutation(() => [FrequencyAssignmentResult])
  async AssignDistinctFrequencies(
    @graphql.Args()
    args: number
  ): Promise<FrequencyAssignmentResult[]> {
    return this.service.AssignDistinctFrequencies(args);
  }

  @graphql.Query(() => String)
  async AssignMostDistinctFrequencies(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AssignMostDistinctFrequencies(args);
  }
}
