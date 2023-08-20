import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { RoomSchema } from "src/entities/room.schema";
import { UserSchema } from "src/entities/user.schema";
import { DeviceSchema } from "src/entities/device.schema";
import { TemperatureSchema } from "src/entities/temperature.schem";
import { TemperaturesService } from "./temperatures.service";
import { TemperaturesController } from "./temperatures.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'temperatures',
                schema: TemperatureSchema
            }
        ])
    ],
    providers: [TemperaturesService],
    controllers: [TemperaturesController]
})
export class TemperaturesModule { }