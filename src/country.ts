export interface Country {
  name: string;
  topLevelDomain: string[];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  flags: {
    png: string;
  };
  currencies: {
    code: string;
    symbol: string;
  }[];
  languages: {
    name: string;
  }[];
  borders: string[];
}
