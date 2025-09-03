import { Injectable } from '@nestjs/common';
import { Beer } from './interfaces/beer.interface';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';

@Injectable()
export class BeersService {
  private beers: Beer[] = [
    {
      id: 1,
      name: 'Cerveza 1',
      style: 'Estilo 1',
      description: 'Descripción de la cerveza 1',
      stock: 10,
    },
    {
      id: 2,
      name: 'Cerveza 2',
      style: 'Estilo 2',
      description: 'Descripción de la cerveza 2',
      stock: 20,
    },
    {
      id: 3,
      name: 'Cerveza 3',
      style: 'Estilo 3',
      description: 'Descripción de la cerveza 3',
      stock: 30,
    },
  ];

  findAll(): Beer[] {
    return this.beers;
  }

  findOne(id: number): Beer {
    console.log('Buscando cerveza con id en el servicio ', id);
    return this.beers.find((beer) => beer.id === Number(id));
  }

  remove(id: number): Beer {
    const index = this.beers.findIndex((b) => b.id === Number(id));
    if (index !== -1) {
      return this.beers.splice(index, 1)[0];
    }
    return null;
  }

  create(beer: CreateBeerDto): Beer {
    const newBeer: Beer = {
      id: this.beers.length + 1,
      name: beer.name,
      style: beer.style,
      description: beer.description,
      stock: beer.stock,
    };
    this.beers.push(newBeer);
    return newBeer;
  }

  update(id: number, beer: UpdateBeerDto): Beer {
    const index = this.beers.findIndex((b) => b.id === Number(id));
    if (index !== -1) {
      const current_beer: Beer = this.beers[index];
      this.beers[index] = {
        id: current_beer.id,
        name: beer.name,
        style: beer.style,
        description: beer.description,
        stock: beer.stock,
      };
      return this.beers[index];
    }
    return null;
  }
}
