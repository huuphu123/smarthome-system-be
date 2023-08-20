import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/entities/user.schema';
import { ActiveSchema } from 'src/entities/active.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { RoomSchema } from 'src/entities/room.schema';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: "users",
            schema: UserSchema
        },
        {
            name: "actives",
            schema: ActiveSchema
        },
        {
            name: "rooms",
            schema: RoomSchema
        }
    ]),
        PassportModule,
    JwtModule.registerAsync({
        useFactory: () => ({
            secret: process.env.SECRET_JWT,
            signOptions: { expiresIn: '60s' },
        })
    })

    ],
    controllers: [UserController],
    providers: [UserService, JwtStrategy],
    exports: [UserService]
})
export class UserModule { }
