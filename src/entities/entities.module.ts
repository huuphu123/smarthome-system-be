import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomController } from 'src/rooms/room.controller';
import { RoomService } from 'src/rooms/room.service';
import { RoomSchema } from './room.schema';

@Module({

})
export class EntitiesModule {}
