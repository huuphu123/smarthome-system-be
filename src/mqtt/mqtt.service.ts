import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from "@nestjs/microservices";
import { FanDto, LightDto } from './dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MqttService {
    constructor(
        @Inject('ADA_SERVICE') private readonly client: ClientProxy,
        @Inject('API_v1') private readonly clientX: ClientProxy,
        private readonly config: ConfigService
    ) { }

    sendLightState(light: LightDto) {
        try {
            console.log('call me')
            const pattern = this.config.get<string>('LED_FEED')
            const payload = new MqttRecordBuilder(light).setQoS(1).build()
            console.log(pattern, payload)
            const response = this.clientX
                .emit<string>('VyKing/f/led', payload)
            console.log(response)
            return true
        } catch (err) {
            console.log(err)
        }

    }
    sendFanState(fan: FanDto) {
        const pattern = this.config.get<string>('FAN_FEED')
        const payload = new MqttRecordBuilder(fan).setQoS(1).build()
        console.log('pingServiceA....', payload)
        return this.client
            .emit<string>('VyKing/f/fan', payload)

    }
}
