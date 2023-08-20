import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActiveDocument = Active & Document;
@Schema()
export class Active {
    @Prop()
    token: string

    @Prop()
    userId: string
}

export const ActiveSchema = SchemaFactory.createForClass(Active);