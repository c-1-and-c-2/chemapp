export interface Compound {
  id: number;
  name: string;
  image: string;
}

export interface Reagent {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  compoundId: number;
  reagentId: number;
  name: string;
  image: string;
}
