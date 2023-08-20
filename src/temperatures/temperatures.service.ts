import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TemperatureDocument } from "src/entities/temperature.schem";

@Injectable()
export class TemperaturesService {
    constructor( @InjectModel('temperatures') private readonly temperatureModel: Model<TemperatureDocument>){}

    async getTemp() {
        const data = await this.temperatureModel.find()
        return data
    }

}