import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsDto } from './dto/create-visits.dto';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: VisitsDto) {
    return this.visitsService.createVisits(dto)
  }

  @Get()
  async get() {
    return this.visitsService.getVisits()
  }

  @Get(':id')
  async getId(@Param('id') id_visits: string) {
    return this.visitsService.byId(+id_visits)
  }

  @Put(':id')
  async update(@Param('id') id_visits: string, @Body() dto: VisitsDto) {
    return this.visitsService.updateVisits(+id_visits, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_visits: string) {
    return this.visitsService.deleteVisits(+id_visits)
  }
}