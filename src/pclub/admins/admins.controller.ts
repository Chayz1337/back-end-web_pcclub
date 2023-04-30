import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminsDto  } from './dto/create-admins.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateAdminsDto) {
    return this.adminsService.create(dto)
  }

  @Get()
  async get() {
    return this.adminsService.findAll()
  }

  @Get(':id')
  async getId(@Param('id') idClient: string) {
    return this.adminsService.findOne(+idClient)
  }

  @Put(':id')
  async update(@Param('id') idClient: string, @Body() dto: CreateAdminsDto) {
    return this.adminsService.update(+idClient, dto)
  }

  @Delete(':id')
  async delete(@Param('id') idClient: string) {
    return this.adminsService.remove(+idClient)
  }
}
