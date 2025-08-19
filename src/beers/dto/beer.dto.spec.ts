import { BeerDto } from './beer.dto';

describe('BeerDto', () => {
  it('should be defined', () => {
    expect(new BeerDto()).toBeDefined();
  });
});
