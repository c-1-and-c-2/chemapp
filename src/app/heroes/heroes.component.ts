import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'

import {Compound, Reagent, Product} from '../hero';
import {COMPOUNDS, REAGENTS, PRODUCTS} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})

export class HeroesComponent {
  compounds = COMPOUNDS;
  selectedCompound?: Compound;

  reagents = REAGENTS;
  selectedReagent?: Reagent;

  productImage?: string = "assets/images/products/1_1.png";

  onSelectCompound(compound: Compound): void {
    this.selectedCompound = compound;
    this.updateProductImage();
  }

  onSelectReagent(reagent: Reagent): void {
    this.selectedReagent = reagent;
    this.updateProductImage();
  }

  updateProductImage(){
    this.productImage = `assets/images/products/${this.selectedCompound?.id}_${this.selectedReagent?.id}.png`;
  }
}
