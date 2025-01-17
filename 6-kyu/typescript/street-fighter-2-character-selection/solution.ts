type Move = 'down'|'up'|'right'|'left'

class Selection {
  constructor(private fighters: string[][], private position: number[]) { }
  
  public down() {
    if (this.position[0] === 0) {
      this.position[0] = 1
    }
  }
  
  public up() {
    if (this.position[0] === 1) {
      this.position[0] = 0
    }
  }
  
  public left() {
    if (this.position[1] === 0) {
      this.position[1] = 5
    } else {
      this.position[1] -= 1
    }
  }
  
  public right() {
    if (this.position[1] === 5) {
      this.position[1] = 0
    } else {
      this.position[1] += 1
    }
  }
  
  public getFighter(): string {
    return this.fighters[this.position[0]][this.position[1]]
  }
}

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  let hoveredFighters: string[] = []
  const selection = new Selection(fighters, position)
  
  for (let move of moves) {
    selection[move]()
    hoveredFighters.push(selection.getFighter())
  }
  
  return hoveredFighters
}