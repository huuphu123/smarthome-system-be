import { Controller, Get } from "@nestjs/common";
import { TemperaturesService } from "./temperatures.service";
@Controller('temperatures')
export class TemperaturesController {
    constructor(private readonly temperatureService: TemperaturesService){}

    @Get()
    async getTemp() {
        return await this.temperatureService.getTemp()
    }
}
