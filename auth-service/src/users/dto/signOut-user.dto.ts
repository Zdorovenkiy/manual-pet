import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";
import { PickType } from "@nestjs/mapped-types";

export class SignOutUserDto extends PickType(CreateUserDto, ["email"]) {}
