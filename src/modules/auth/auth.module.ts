import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserController } from "./controller/user.controller";
import { UserService } from './services/user.service';
import { UsersImages } from "./entities/usersImages.entity";
import { Idioma } from "../idiomas/entities/idioma.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, UsersImages, Idioma])],
    controllers: [UserController],
    providers: [UserService],
})
export class AuthModule {}