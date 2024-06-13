import * as graphql from "@nestjs/graphql";
import { FrequencyResolverBase } from "./base/frequency.resolver.base";
import { Frequency } from "./base/Frequency";
import { FrequencyService } from "./frequency.service";

@graphql.Resolver(() => Frequency)
export class FrequencyResolver extends FrequencyResolverBase {
  constructor(protected readonly service: FrequencyService) {
    super(service);
  }
}
