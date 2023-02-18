import { NextApiRequest, NextApiResponse } from "next";
import countries from "../../public/countries.json";

type Translations = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};
// eslint-disable-next-line no-unused-vars
type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: Translations;
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
    otherNames: string[];
    otherAcronyms: string[];
  }[];
  cioc: string;
  independent: boolean;
  gini?: number;
};

export type CountryResponse = {
  name: string;
  latlng: Array<number>;
  alpha2Code: string;
};

// Returns the all countries
export default async (
  req: NextApiRequest,
  res: NextApiResponse<CountryResponse[]>
) => {
  res.status(200).json(
    countries.map((c) => {
      return {
        name: c.name,
        latlng: c.latlng,
        alpha2Code: c.alpha2Code,
      } as CountryResponse;
    })
  );
};
