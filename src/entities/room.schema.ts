import { Document } from "mongoose";
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
export type RoomDocument = Room & Document;

@Schema({ timestamps: true })
export class Room {
    @Prop()
    name: string;

    @Prop()
    userIds: string[]

    @Prop()
    deviceIds: string[]

    @Prop()
    createdAt?: Date
  
    @Prop()
    updatedAt?: Date
}

export const RoomSchema = SchemaFactory.createForClass(Room)