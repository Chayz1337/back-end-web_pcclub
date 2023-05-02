import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServicesDto  } from './dto/create-services.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateServicesDto) {
    return this.servicesService.create(dto)
  }

  @Get()
  async get() {
    return this.servicesService.findAll()
  }

  @Get(':id')
  async getId(@Param('id') idClient: string) {
    return this.servicesService.findOne(+idClient)
  }

  @Put(':id')
  async update(@Param('id') idClient: string, @Body() dto: CreateServicesDto) {
    return this.servicesService.update(+idClient, dto)
  }

  @Delete(':id')
  async delete(@Param('id') idClient: string) {
    return this.servicesService.remove(+idClient)
  }
}

