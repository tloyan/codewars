const dnaChart: Record<string, string> = {
  "A": "T",
  "T": "A",
  "G": "C",
  "C": "G"
}

export class Kata {
  static dnaStrand(dna: string) {
    return dna.split('').reduce((acc: string[], val: string) => {
      return [...acc, dnaChart[val]];
    }, []).join('');
  }
}