import { getRandom } from '../helpers/random';

export class Taupe {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
    this.top = `${getRandom(1000)}px`;
    this.left = `${getRandom(1000)}px`;
  }
}
