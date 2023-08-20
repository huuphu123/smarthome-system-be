import { Controller, Get, Body, Post, Param, UseGuards, UseFilters, Patch } from "@nestjs/common";
import { Room } from "src/entities/room.schema";
import { Response } from "src/interfaces";  
import { RoomService } from "./room.service";
import { AddUserToRoomDto, CreateRoomDto } from "./dto";
import { JwtAuthGuard } from "src/auth/jwt.-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { ViewAuthFilter } from "src/auth/auth.filter";
import { AddDeviceToRoomDto } from "src/devices/dto";

@Controller('rooms')
@ApiTags('rooms')
// @UseGuards(JwtAuthGuard)
export class RoomController {
    constructor(private readonly roomService: RoomService) { }
    @Get()
    async getAllRooms(): Promise<Response<Room[]>> {
        return await this.roomService.getAllRooms()
    }

    @Get(':roomId')
    async getRoomById(@Param('roomId') roomId: string): Promise<Response<Room>> {
        return await this.roomService.getRoomById(roomId);
    }
    
    @Post('/create')
    async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Response<Room>> {
        return await this.roomService.createRoom(createRoomDto)
    }

    @Post(':roomId/users')
    async addUserToRoom(@Param('roomId') roomId: string, @Body() addUserToRoom: AddUserToRoomDto): Promise<Response<Room>> {
        return await this.roomService.addUserToRoom(roomId, addUserToRoom.userId);
    }
    @Patch(':roomId/users')
    async removeUserInRoom(@Param('roomId') roomId: string, @Body() addUserToRoom: AddUserToRoomDto): Promise<Response<Room>> {
        return await this.roomService.removeUserInRoom(roomId, addUserToRoom.userId);
    }

    @Post(':roomId/devices')
    async addDeviceToRoom(@Param('roomId') roomId: string, @Body() addDeviceToRoomDto: AddDeviceToRoomDto): Promise<Response<Room>> {
        return await this.roomService.addDeviceToRoom(roomId, addDeviceToRoomDto.deviceId);
    }

    @Patch(':roomId/devices')
    async removeDeviceInRoom(@Param('roomId') roomId: string, @Body() addDeviceToRoomDto: AddDeviceToRoomDto): Promise<Response<Room>> {
        return await this.roomService.removeDeviceInRoom(roomId, addDeviceToRoomDto.deviceId);
    }


    @Post(':roomId/users/:userId')
    async checkUserInRoom(@Param('roomId') roomId: string, @Param('userId') userId: string): Promise<Response<boolean>> {
        return await this.roomService.checkUserInRoom(roomId, userId);
    }
}