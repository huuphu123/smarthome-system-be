import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class LightDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    state: string
}