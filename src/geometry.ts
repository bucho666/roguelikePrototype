export interface Point {
  x: number; y: number;
}

export class Coord implements Point {
  constructor(public x: number=0, public y: number=0){}

  distance(other: Point): Coord {
    return new Coord(this.x - other.x, this.y - other.y)
  }

  plus(other: Point): Coord {
    return new Coord(this.x + other.x, this.y + other.y)
  }

  get tuple(): [number, number] {
    return [this.x, this.y];
  }
}

export class Direction implements Point {
  static readonly Here = new Direction();
  static readonly Up = new Direction(0, -1, -90);
  static readonly Right = new Direction(1, 0, 0);
  static readonly Down = new Direction(0, 1, 90);
  static readonly Left = new Direction(-1, 0, 180);
  static readonly UpRight = new Direction(1, -1, -45);
  static readonly DownRight = new Direction(1, 1, 45);
  static readonly DownLeft = new Direction(-1, 1, 135);
  static readonly UpLeft = new Direction(-1, -1, -135);
  constructor(readonly x: number=0, readonly y: number=0, readonly angle: number = 0){}
}

export class Size {
  constructor(public width: number, public height: number) {}
  get tuple(): [number, number] {
    return [this.width, this.height]
  }
}
