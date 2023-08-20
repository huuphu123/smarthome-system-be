import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'src/interfaces'
import { UserLoginDto, UserRegisterDto } from 'src/users/dto'
import { UserLogin, UserRegister } from 'src/users/interfaces'
import { UserService } from 'src/users/user.service'
@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post('login')
    async login(@Body() userDto: UserLoginDto): Promise<Response<UserLogin>> {
        return await this.userService.login(userDto)
    }

    @Post('register')
    async register(@Body() userDto: UserRegisterDto): Promise<Response<UserRegister>> {
        return await this.userService.register(userDto)
    }
}