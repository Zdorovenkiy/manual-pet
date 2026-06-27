import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";
import { PickType } from "@nestjs/mapped-types";

export class SignInUserDto extends PickType(CreateUserDto, ["email", "password"]) {}
