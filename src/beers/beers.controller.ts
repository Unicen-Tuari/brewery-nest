import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { BeerDto } from './dto/beer.dto';

@Controller('beers')
export class BeersController {
  // Este metodo retorna todas las cervezas de mi aplicacion
  @Get()
  findAll(): BeerDto[] {
    console.log('Obteniendo todas las cervezas');
    return [
      new BeerDto(
        1,
        'Cerveza 1',
        'Descripción de la cerveza 1',
        'Estilo 1',
        10,
      ),
      new BeerDto(
        2,
        'Cerveza 2',
        'Descripción de la cerveza 2',
        'Estilo 2',
        20,
      ),
      new BeerDto(
        3,
        'Cerveza 3',
        'Descripción de la cerveza 3',
        'Estilo 3',
        30,
      ),
    ];
  }
  // Este metodo retorna una cerveza por su id
  @Get(':id')
  findOne(@Param('id') id: number): BeerDto {
    console.log(`Obteniendo cerveza con id: ${id}`);
    return new BeerDto(
      id,
      `Cerveza ${id}`,
      `Descripción de la cerveza ${id}`,
      `Estilo ${id}`,
      id * 10,
    );
  }
  // Este metodo borra una cerveza
  @Delete(':id')
  remove(@Param('id') id: number): BeerDto {
    console.log(`Borrando cerveza con id: ${id}`);
    return new BeerDto(
      id,
      `Cerveza ${id}`,
      `Descripción de la cerveza ${id}`,
      `Estilo ${id}`,
      id * 10,
    );
  }

  // Este metodo crea una cerveza
  @Post()
  create(@Body() createBeerDto: CreateBeerDto): BeerDto {
    console.log('Creando cerveza:', createBeerDto);
    return new BeerDto(
      Math.floor(Math.random() * 1_000_000) + 1,
      createBeerDto.name,
      createBeerDto.description,
      createBeerDto.style,
      createBeerDto.stock,
    );
  }
  // Este metodo actualiza una cerveza
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBeerDto: UpdateBeerDto,
  ): BeerDto {
    console.log(`Actualizando cerveza con id: ${id}`, updateBeerDto);
    return new BeerDto(
      id,
      updateBeerDto.name,
      updateBeerDto.description,
      updateBeerDto.style,
      updateBeerDto.stock,
    );
  }
}
