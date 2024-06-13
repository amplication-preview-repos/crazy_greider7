import { Injectable } from "@nestjs/common";
import { FrequencyAssignmentResult } from "../frequencyAssignment/FrequencyAssignmentResult";

@Injectable()
export class FrequencyAssignmentService {
  constructor() {}
  async AssignDistinctFrequencies(args: number): Promise<FrequencyAssignmentResult[]> {
    throw new Error("Not implemented");
  }
  async AssignMostDistinctFrequencies(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
