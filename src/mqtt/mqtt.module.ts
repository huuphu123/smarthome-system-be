import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from "@nestjs/microservices";
import { MqttService } from './mqtt.service';
import { MqttController } from './mqtt.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'ADA_SERVICE',
        imports: [ConfigModule],
        useFactory: async (config: ConfigService) => ({
          transport: Transport.MQTT,
          options: {
            subscribeOptions: {
              qos: 1
            },
            url: "tcp://io.adafruit.com",
            username: "VyKing",
            password: "aio_iplV08agc2mkqnrd8uatyjvmkRwZ",
        
          }
        }),
        inject: [ConfigService]
      }
    ]),
  ],
  providers: [MqttService, {
    provide: 'API_v1',
    useFactory: () =>
      ClientProxyFactory.create({
        transport: Transport.MQTT,
        options: {
          url: 'tcp://io.adafruit.com',
          username: "VyKing",
          password: "aio_iplV08agc2mkqnrd8uatyjvmkRwZ",
          userProperties: { 'x-version': '1.0.0' },
        },
      }),
  },],
  controllers: [MqttController],
  exports: [MqttService]
})
export class MqttModule { }
