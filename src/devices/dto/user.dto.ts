import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    lastName: string;
    
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: Boolean,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    active: boolean;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    phoneNumber: string

    @ApiPropertyOptional({
        type: Date,
        description: 'This is a required property',
    })
    @IsOptional()
    createdAt?: Date
  
    @ApiPropertyOptional({
        type: Date,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    updatedAt?: Date
}