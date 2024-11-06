import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    @Get()
    getAllBootcamps(): String{
        return " aqui van a mostrarse todos los Bootcamps"
    }

    @Get(":id")
    getAllBootcampByid(@Param("id") id: number): String{
        return `aqui va a mostrarse el boot:${id}`
    }

}


