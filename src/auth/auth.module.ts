import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/user.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.SECRET_JWT,
                signOptions: { expiresIn: '60s' },
            })
        })
    ],
    controllers: [AuthController],
    providers: [JwtStrategy]
})
export class AuthModule { }