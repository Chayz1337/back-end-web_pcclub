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
  async getId(@Param('id') id_service: string) {
    return this.servicesService.findOne(+id_service)
  }

  @Put(':id')
  async update(@Param('id') id_service: string, @Body() dto: CreateServicesDto) {
    return this.servicesService.update(+id_service, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_service: string) {
    return this.servicesService.remove(+id_service)
  }
}

