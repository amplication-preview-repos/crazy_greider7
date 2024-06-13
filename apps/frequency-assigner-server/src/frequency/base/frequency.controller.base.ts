/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FrequencyService } from "../frequency.service";
import { FrequencyCreateInput } from "./FrequencyCreateInput";
import { Frequency } from "./Frequency";
import { FrequencyFindManyArgs } from "./FrequencyFindManyArgs";
import { FrequencyWhereUniqueInput } from "./FrequencyWhereUniqueInput";
import { FrequencyUpdateInput } from "./FrequencyUpdateInput";

export class FrequencyControllerBase {
  constructor(protected readonly service: FrequencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Frequency })
  async createFrequency(
    @common.Body() data: FrequencyCreateInput
  ): Promise<Frequency> {
    return await this.service.createFrequency({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Frequency] })
  @ApiNestedQuery(FrequencyFindManyArgs)
  async frequencies(@common.Req() request: Request): Promise<Frequency[]> {
    const args = plainToClass(FrequencyFindManyArgs, request.query);
    return this.service.frequencies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Frequency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async frequency(
    @common.Param() params: FrequencyWhereUniqueInput
  ): Promise<Frequency | null> {
    const result = await this.service.frequency({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Frequency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFrequency(
    @common.Param() params: FrequencyWhereUniqueInput,
    @common.Body() data: FrequencyUpdateInput
  ): Promise<Frequency | null> {
    try {
      return await this.service.updateFrequency({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Frequency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFrequency(
    @common.Param() params: FrequencyWhereUniqueInput
  ): Promise<Frequency | null> {
    try {
      return await this.service.deleteFrequency({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}