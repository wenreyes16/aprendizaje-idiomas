import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { FilesModule } from './modules/files/files.module';
import { CursoModule } from './modules/curso/curso.module';
import { LeccionModule } from './modules/leccion/leccion.module';
import { EvaluacionModule } from './modules/evaluacion/evaluacion.module';
import { ComentariosModule } from './modules/comentarios/comentarios.module';
import { IdiomasModule } from './modules/idiomas/idiomas.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'12345678',
    database: 'idiomas',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  AuthModule,
  FilesModule,
  CursoModule,
  LeccionModule,
  EvaluacionModule,
  ComentariosModule,
  IdiomasModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
