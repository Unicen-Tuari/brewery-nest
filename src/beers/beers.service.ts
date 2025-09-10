import { Injectable } from '@nestjs/common';
import { Beer } from './interfaces/beer.interface';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { QueryBeerDto } from './dto/query-beer.dto';

@Injectable()
export class BeersService {
  private beers: Beer[] = [
    {
      id: 1,
      name: 'Cerveza 1',
      style: 'Porter',
      description: 'Descripción de la cerveza 1',
      stock: 10,
    },
    {
      id: 2,
      name: 'Cerveza 2',
      style: 'Lager',
      description: 'Descripción de la cerveza 2',
      stock: 20,
    },
    {
      id: 3,
      name: 'Cerveza 3',
      style: 'IPA',
      description: 'Descripción de la cerveza 3',
      stock: 30,
    },
    {
      id: 4,
      name: 'Cerveza 4',
      style: 'Amber Lager',
      description: 'Descripción de la cerveza 4',
      stock: 40,
    },
    {
      id: 5,
      name: 'Cerveza 5',
      style: 'IPA',
      description: 'Descripción de la cerveza 5',
      stock: 5,
    },
    {
      id: 6,
      name: 'Cerveza 6',
      style: 'IPA',
      description: 'Descripción de la cerveza 6',
      stock: 20,
    },
  ];

  findAll(query: QueryBeerDto): Beer[] {
    console.log(
      'Buscando todas las cervezas en el servicio con query: ',
      query,
    );
    const beersToReturn = this.beers.filter((beer) => {
      if (
        query.style &&
        beer.style.toLowerCase() !== query.style.toLowerCase()
      ) {
        return false;
      }
      return true;
    });

    const beersSorted = beersToReturn.sort((a, b) => {
      if (query.sortBy) {
        const fieldA = a[query.sortBy];
        const fieldB = b[query.sortBy];
        if (fieldA < fieldB) {
          return query.orderBy === 'DESC' ? 1 : -1;
        }
        if (fieldA > fieldB) {
          return query.orderBy === 'DESC' ? -1 : 1;
        }
        return 0;
      }
      return 0;
    });
    return beersSorted;
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
