/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutProductsInput;
}

export { ProductCreateInput as ProductCreateInput };
