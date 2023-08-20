import { HttpStatus, Injectable, HttpException, Inject } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Device, DeviceDocument } from 'src/entities/device.schema'
import { HTTP_MESSAGE, Response } from 'src/interfaces'
import { CreateDeviceDto } from './dto'
import { Room, RoomDocument } from 'src/entities/room.schema'
import { indexOf } from 'lodash'
import { MqttService } from 'src/mqtt/mqtt.service'
@Injectable()
export class DeviceService {
    constructor(@InjectModel('devices') private readonly deviceModel: Model<DeviceDocument>,
        @InjectModel('rooms') private readonly roomModel: Model<RoomDocument>,
        private readonly mqttService: MqttService) { }

    async getAllDevices(): Promise<Response<Device[]>> {
        try {
            const devices = await this.deviceModel.find().lean()
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: devices
            }
        } catch (err) {
            throw new HttpException(HTTP_MESSAGE.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createDevice(deviceInfo: CreateDeviceDto): Promise<Response<Device>> {
        try {
            const device = await this.deviceModel.create({
                ...deviceInfo
            })
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: device
            }
        } catch (err) {
            throw new HttpException(HTTP_MESSAGE.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async toggleStatus(deviceId: string, status: boolean): Promise<Response<Device>> {
        try {
            const device = await this.deviceModel.findByIdAndUpdate(deviceId, {
                $push: {
                    record: {
                        state: status,
                        timestamps: new Date()
                    }
                }
            }, { new: true }).lean()
            this.mqttService.sendLightState({ id: device._id, state: status.toString() })
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: device
            }
        } catch (err) {
            throw new HttpException(HTTP_MESSAGE.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async changeSpeed(deviceId: string, value: number): Promise<Response<Device>> {
        try {
            const device = await this.deviceModel.findByIdAndUpdate(deviceId, {
                $push: {
                    record: {
                        state: value,
                        timestamps: new Date()
                    }
                }
            }, { new: true }).lean()
            this.mqttService.sendFanState({ id: device._id, value: value.toString() })
            console.log('true')
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: device
            }
        } catch (err) {
            throw new HttpException(HTTP_MESSAGE.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getDeviceById(roomId: string): Promise<Response<Device>> {
        const device = await this.deviceModel.findById(roomId).lean()
        if (device) {
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: device
            }
        }
        else throw new HttpException('Room Not Found', HttpStatus.NOT_FOUND)
    }

    async getDeviceByType(type: string): Promise<Response<Device[]>> {
        const device = await this.deviceModel.find({ type }).lean()
        if (device) {
            return {
                code: HttpStatus.OK,
                message: HTTP_MESSAGE.OK,
                data: device
            }
        }
        else throw new HttpException('Room Not Found', HttpStatus.NOT_FOUND)
    }

    async getDeviceByIds(deviceIds: string[]): Promise<Response<Device[]>> {
        const devices = await this.deviceModel.find({
            _id: {
                $in: deviceIds.map(id => new Types.ObjectId(id))
            }
        })
        return {
            code: HttpStatus.OK,
            message: HTTP_MESSAGE.OK,
            data: devices
        }
    }



}