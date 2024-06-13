import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrequencyServiceBase } from "./base/frequency.service.base";

@Injectable()
export class FrequencyService extends FrequencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
