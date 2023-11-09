import {
  IsArray,
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    password: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];
  }
  