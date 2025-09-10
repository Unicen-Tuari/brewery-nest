import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { Beer } from './interfaces/beer.interface';
import { BeersService } from './beers.service';
import { QueryBeerDto } from './dto/query-beer.dto';

@Controller('beers')
export class BeersController {
  // Inyectamos el servicio de cervezas
  constructor(private readonly beersService: BeersService) {}

  // Este metodo retorna todas las cervezas de mi aplicacion
  @Get()
  findAll(@Query() query: QueryBeerDto): Beer[] {
    console.log('Obteniendo todas las cervezas');
    return this.beersService.findAll(query);
  }
  // Este metodo retorna una cerveza por su id
  @Get(':id')
  findOne(@Param('id') id: number): Beer {
    console.log(`Obteniendo cerveza con id: ${id}`);
    return this.beersService.findOne(id);
  }
  // Este metodo borra una cerveza
  @Delete(':id')
  remove(@Param('id') id: number): Beer {
    console.log(`Borrando cerveza con id: ${id}`);
    return this.beersService.remove(id);
  }

  // Este metodo crea una cerveza
  @Post()
  create(@Body() createBeerDto: CreateBeerDto): Beer {
    console.log('Creando cerveza:', createBeerDto);
    return this.beersService.create(createBeerDto);
  }
  // Este metodo actualiza una cerveza
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBeerDto: UpdateBeerDto): Beer {
    console.log(`Actualizando cerveza con id: ${id}`, updateBeerDto);
    return this.beersService.update(id, updateBeerDto);
  }
}
