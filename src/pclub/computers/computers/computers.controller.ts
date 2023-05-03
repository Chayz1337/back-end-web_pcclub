import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { CreateComputersDto  } from './dto/create-computers.dto';

@Controller('computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateComputersDto) {
    return this.computersService.create(dto)
  }

  @Get()
  async get() {
    return this.computersService.findAll()
  }

  @Get(':id')
  async getId(@Param('id') id_computers: string) {
    return this.computersService.findOne(+id_computers)
  }

  @Put(':id')
  async update(@Param('id') id_computers: string, @Body() dto: CreateComputersDto) {
    return this.computersService.update(+id_computers, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id_computers: string) {
    return this.computersService.remove(+id_computers)
  }
}
