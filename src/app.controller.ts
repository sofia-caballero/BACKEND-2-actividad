import { Controller, Get ,Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "ficha 2898754";
  }
  //endpoint
  @Get("/ejemplo")
  ejemplo() : string{
    return "ejemplo"
  }
   //endpoint con parametros
  @Get("identificacion/:id/:nombre")
  getIdentificacion(@Param("id") id:number  , @Param("nombre") nom:string , @Query("telefono") tel:number, @Query("edad") edad:string ) :Student {
    return new Student(id,nom,tel, edad)
  }

}