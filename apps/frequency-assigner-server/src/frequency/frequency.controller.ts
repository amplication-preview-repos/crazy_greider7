import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FrequencyService } from "./frequency.service";
import { FrequencyControllerBase } from "./base/frequency.controller.base";

@swagger.ApiTags("frequencies")
@common.Controller("frequencies")
export class FrequencyController extends FrequencyControllerBase {
  constructor(protected readonly service: FrequencyService) {
    super(service);
  }
}
