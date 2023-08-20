import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsArray, IsOptional} from 'class-validator'

export class CreateDeviceDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    type:string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    feed:string;
}

export class AddDeviceToRoomDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsString()
    deviceId: string;
}
export class DeviceByIdsDto {
    @ApiProperty({
        type: [String],
        description: 'This is a required property',
    })
    @IsNotEmpty()
    @IsArray()
    deviceIds: string[]
}