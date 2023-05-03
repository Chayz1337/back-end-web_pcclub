import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorsDto  } from './dto/create-visitors.dto';

@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateVisitorsDto) {
    return this.visitorsService.create(dto)
  }

  @Get()
  async get() {
    return this.visitorsService.findAll()
  }

  @Get(':id')
  async getId(@Param('id') id_visitors: string) {
    return this.visitorsService.findOne(+id_visitors)
  }

  @Put(':id')
  async update(@Param('id') id_visitors: string, @Body() dto: CreateVisitorsDto) {
    return this.visitorsService.update(+id_visitors, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_visitors: string) {
    return this.visitorsService.remove(+id_visitors)
  }
}


