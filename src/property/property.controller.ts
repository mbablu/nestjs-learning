import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All Properties"
    }

    @Get(':id/:slug')
    findOne(@Param() id){
        return id;
    }

    @Post()
    create(@Body("name") name:string){
        return Body
    }
}
