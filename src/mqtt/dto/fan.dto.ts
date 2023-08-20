import { IsNotEmpty, IsString } from "class-validator";

export class FanDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    value: string
}