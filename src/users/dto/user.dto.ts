import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserRegisterDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsString()
    email: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;
}

export class UserLoginDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UserActiveDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    token: string
}

export class UserUpdateDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiPropertyOptional({
            type: String,
            description: 'This is an optional property',
          })
    @IsString()
    @IsOptional()
    firstName?: string;

    @ApiPropertyOptional({
            type: String,
            description: 'This is an optional property',
          })
    @IsString()
    @IsOptional()
    lastName?: string;

    @ApiPropertyOptional({
            type: String,
            description: 'This is an optional property',
          })
    @IsString()
    @IsOptional()
    phoneNumber?: string;
}

export class UserByIdsDto {
    @ApiProperty({
        type: [String],
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsArray()
    userIds: string[]
}
