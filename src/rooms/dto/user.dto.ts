import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator'

export class AddUserToRoomDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    userId: string;
}
