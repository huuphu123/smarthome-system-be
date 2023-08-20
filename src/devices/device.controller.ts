import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { DeviceService } from './device.service';
import { Response } from 'src/interfaces';
import { Device } from 'src/entities/device.schema';
import { AddDeviceToRoomDto, CreateDeviceDto, DeviceByIdsDto } from './dto';
import { Room } from 'src/entities/room.schema';
import { JwtAuthGuard } from 'src/auth/jwt.-auth.guard';
import { ApiTags } from '@nestjs/swagger';


@Controller('devices')
@ApiTags('devices')
// @UseGuards(JwtAuthGuard)

export class DeviceController {
    constructor(private readonly deviceService: DeviceService){}

    @Get()
    async getAllDevices(): Promise<Response<Device[]>> {
        return await this.deviceService.getAllDevices()
    }
  
    @Get(':deviceId')
    async getDeviceById(@Param('deviceId') deviceId: string): Promise<Response<Device>> {
        return await this.deviceService.getDeviceById(deviceId);
    }

    @Get('type/:type')
    async getDeviceByType(@Param('type') type: string): Promise<Response<Device[]>> {
        return await this.deviceService.getDeviceByType(type);
    }

    @Post()
    async getDeviceByIds(@Body() deviceByIds: DeviceByIdsDto): Promise<Response<Device[]>> {
        return await this.deviceService.getDeviceByIds(deviceByIds.deviceIds)
    }

    @Post('create')
    async createDevice(@Body() createDeviceDto: CreateDeviceDto): Promise<Response<Device>> {
        return await this.deviceService.createDevice(createDeviceDto)
    }

    @Post('/:deviceId/light')
    async toggleStatus(@Param('deviceId') deviceId: string,@Body() dto: {status: boolean}): Promise<Response<Device>> {
        return await this.deviceService.toggleStatus(deviceId, dto.status)
    }

    @Post('/:deviceId/fan')
    async changeSpeed(@Param('deviceId') deviceId: string,@Body() dto: {value: number}): Promise<Response<Device>> {
        return await this.deviceService.changeSpeed(deviceId, dto.value)
    }

    
    // @Post(':roomId/devices/:deviceId')
    // async checkDeviceInRoom(@Param('roomId') roomId: string, @Param('deviceId') deviceId: string): Promise<Response<boolean>> {
    //     return await this.deviceService.checkDeviceInRoom(roomId, deviceId);
    // }

}   