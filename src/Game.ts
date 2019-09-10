export type XO = "X" | "O" | "-";
export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  getCells(): XO[] {
    return this.cells;
  }
  getTurn(): XO {
    const countX = this.cells.filter(cell => cell === 'X').length
    const countO = this.cells.filter(cell => cell === 'O').length
    return countX === countO ? 'X' : 'O'
  }
  getWinner(): XO {
    if(this.cells[0] ===  this.cells[1]  && this.cells[1] === this.cells[2]  && this.cells[0] !== '-' )
    {
      return this.cells[0] 
    }
    if(this.cells[3] ===  this.cells[4]  && this.cells[4] === this.cells[5]  && this.cells[5] !== '-' )
    {
      return this.cells[3] 
    }
    else if(this.cells[6] === this.cells[7] && this.cells[7] ===this.cells[8]  && this.cells[8] !== '-')
    {
      return this.cells[6] 
    }
    else if(this.cells[0] === this.cells[3] && this.cells[3] ===this.cells[6]  && this.cells[6] !== '-')
    {
      return this.cells[6] 
    }
    else if(this.cells[1] === this.cells[4] && this.cells[4] ===this.cells[7]  && this.cells[7] !== '-')
    {
      return this.cells[7] 
    }
    else if(this.cells[2] === this.cells[5] && this.cells[5] ===this.cells[8]  && this.cells[8] !== '-')
    {
      return this.cells[8] 
    }
    else if(this.cells[0] === this.cells[4] && this.cells[4] ===this.cells[8]  && this.cells[8] !== '-')
    {
      return this.cells[8] 
    }
    else if(this.cells[2] === this.cells[4] && this.cells[4] ===this.cells[6]  && this.cells[6] !== '-')
    {
      return this.cells[6] 
    }

    return '-'
  }
  isTie(): boolean {
    if(this.cells[0]!=="-"
      &&this.cells[1]!=="-"
      &&this.cells[2]!=="-"
      &&this.cells[3]!=="-"
      &&this.cells[4]!=="-"
      &&this.cells[5]!=="-"
      &&this.cells[6]!=="-"
      &&this.cells[7]!=="-"
      &&this.cells[8]!=="-"
      &&this.getWinner()==="-"){
      return true;
    }
    return false;
  }
  onClick(i: number): void {
    if (this.cells[i] !== '-'||this.getWinner()!=="-"||this.isTie()===true) 
    {
      return
    }
    this.cells[i] = this.getTurn()
  }
  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    console.log(this.cells);
  }
}
