import { Compound, Reagent, Product } from './hero';

export const COMPOUNDS: Compound[] = [
  { id: 1, name: 'ketone', image: 'assets/images/compounds/ketone.png' },
  { id: 2, name: 'cyclohexene', image: 'assets/images/compounds/cyclohexene.png' },
  { id: 3, name: 'ene', image: 'assets/images/compounds/ene.png' },
  { id: 4, name: 'pentene', image: 'assets/images/compounds/pentene.png' },
  { id: 5, name: 'benzaldehyde', image: 'assets/images/compounds/benzaldehyde.png' },
  { id: 6, name: 'nitrobenzene', image: 'assets/images/compounds/nitrobenzene.png' },
  { id: 7, name: 'ethene', image: 'assets/images/compounds/ethene.png' },
  { id: 8, name: 'cyclohexane', image: 'assets/images/compounds/cyclohexane.png' }
];


export const REAGENTS: Reagent[] = [
  { id: 1, name: 'bromination', image: 'assets/images/reagents/bromination.png' },
  { id: 2, name: 'ch3cocl', image: 'assets/images/reagents/ch3cocl.png' },
  { id: 3, name: 'grignard', image: 'assets/images/reagents/grignard.png' },
  { id: 4, name: 'hydrogenation', image: 'assets/images/reagents/hydrogenation.png' },
  { id: 5, name: 'lialh4', image: 'assets/images/reagents/lialh4.png' },
  { id: 6, name: 'oso4', image: 'assets/images/reagents/oso4.png' },
  { id: 7, name: 'ozonolysis', image: 'assets/images/reagents/ozonolysis.png' },
  { id: 8, name: 'THF', image: 'assets/images/reagents/THF.png' },
  { id: 9, name: 'kmno4', image: 'assets/images/reagents/kmno4.png' }
];


export const PRODUCTS: Product[] = [
  { compoundId: 1, reagentId: 1, name: 'ketone', image: 'assets/images/products/ketone.png' },
  { compoundId: 1, reagentId: 2, name: 'ketone', image: 'assets/images/products/ketone.png' },
  { compoundId: 1, reagentId: 3, name: 'ketone', image: 'assets/images/products/ketone.png' },
  { compoundId: 1, reagentId: 4, name: 'ketone', image: 'assets/images/products/ketone.png' },
  { compoundId: 1, reagentId: 5, name: 'ketone', image: 'assets/images/products/ketone.png' },
  { compoundId: 1, reagentId: 6, name: 'ketone', image: 'assets/images/products/ketone.png' },
];
