import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe, Query } from '@nestjs/common';
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
  async getId(@Param('id') id_admins: string) {
    return this.adminsService.findOne(+id_admins)
  }

  @Put(':id')
  async update(@Param('id') id_admins: string, @Body() dto: CreateAdminsDto) {
    return this.adminsService.update(+id_admins, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_admins: string) {
    return this.adminsService.remove(+id_admins)
  }
}
