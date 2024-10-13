import { Body, Controller, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {

    constructor(private propertyService:PropertyService){}




    @Get()
    findAll(){
        return this.propertyService.findAll()
    }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        return this.propertyService.findOne()
    }

    @Post()

    // @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true }))

    create(@Body() body: CreatePropertyDto){
        return this.propertyService.create()
    }

    @Patch(":id")
    update(
        @Body() body: CreatePropertyDto,

        @RequestHeader(new ValidationPipe({ validateCustomDecorators: true})) header: HeadersDto
    ){
        return this.propertyService.update()
    }
}
