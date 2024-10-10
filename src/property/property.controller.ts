import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All Properties"
    }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        console.log(typeof id);
        console.log(typeof sort);


        return id;
    }

    @Post()
    create(@Body("name") name){
        return name
    }
}
