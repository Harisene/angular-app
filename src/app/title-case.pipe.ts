import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  prepositions = ['of', 'the'];

  transform(value: string): string | null {
    if (!value) return null;

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) words[i] = word.toLowerCase();
      else words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    return this.prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }
}
