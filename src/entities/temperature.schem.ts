import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TemperatureDocument = Temperature & Document
@Schema({ timestamps: true })
export class Temperature {

    @Prop()
    value: string;

}

export const TemperatureSchema = SchemaFactory.createForClass(Temperature)