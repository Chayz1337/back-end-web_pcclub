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
  async getId(@Param('id') id_halls: string) {
    return this.hallsService.findOne(+id_halls)
  }

  @Put(':id')
  async update(@Param('id') id_halls: string, @Body() dto: CreateHallsDto) {
    return this.hallsService.update(+id_halls, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_halls: string) {
    return this.hallsService.remove(+id_halls)
  }
}

