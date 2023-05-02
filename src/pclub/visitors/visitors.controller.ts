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
  async getId(@Param('id') idClient: string) {
    return this.visitorsService.findOne(+idClient)
  }

  @Put(':id')
  async update(@Param('id') idClient: string, @Body() dto: CreateVisitorsDto) {
    return this.visitorsService.update(+idClient, dto)
  }

  @Delete(':id')
  async delete(@Param('id') idClient: string) {
    return this.visitorsService.remove(+idClient)
  }
}


