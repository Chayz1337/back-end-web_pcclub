import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { HallsService } from './halls.service';
import { CreateHallsDto  } from './dto/create-halls.dto';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateHallsDto) {
    return this.hallsService.create(dto)
  }

  @Get()
  async get() {
    return this.hallsService.findAll()
  }

  @Get(':id')
  async getId(@Param('id') idClient: string) {
    return this.hallsService.findOne(+idClient)
  }

  @Put(':id')
  async update(@Param('id') idClient: string, @Body() dto: CreateHallsDto) {
    return this.hallsService.update(+idClient, dto)
  }

  @Delete(':id')
  async delete(@Param('id') idClient: string) {
    return this.hallsService.remove(+idClient)
  }
}

