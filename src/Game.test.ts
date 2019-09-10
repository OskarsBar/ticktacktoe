import { Game } from "./Game";
describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("X should be able to make a move", () => {
    const game = new Game();
    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("O should move after X", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should not be able to click twice in one cell", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should win when first row filled with X", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should win when first row filled with O", () => {
    const game = new Game();
    game.onClick(3);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(8);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "O", "O", "O",
      "X", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });
  it("should win when last row filled with X", () => {
    const game = new Game();
    game.onClick(6);
    game.onClick(3);
    game.onClick(7);
    game.onClick(4);
    game.onClick(8);
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should win when vertical row filled with X", () => {
    const game = new Game();
    game.onClick(1);
    game.onClick(3);
    game.onClick(4);
    game.onClick(5);
    game.onClick(7);
    expect(game.getCells()).toEqual([
      "-", "X", "-",
      "O", "X", "O",
      "-", "X", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should win when diognal row filled with X", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(4);
    game.onClick(7);
    game.onClick(8);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "-",
      "-", "O", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should be no mere turns after winer of tie", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(4);
    game.onClick(7);
    game.onClick(8);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "-",
      "-", "O", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "-",
      "-", "O", "X"
    ]);
  });
  it("should be tie", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(3);
    game.onClick(5);
    game.onClick(4);
    game.onClick(6);
    game.onClick(8);
    game.onClick(7);
    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "O", "O", "X",
      "X", "X", "O"
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
  it("should be able to restart the game", () => {
    const game = new Game();
    game.onClick(6);
    game.onClick(3);
    game.onClick(7);
    game.onClick(4);
    game.onClick(8);
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);
    game.restart();
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
});
