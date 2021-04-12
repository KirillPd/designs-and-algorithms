export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number)
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  private calculateDistance(a: Point, b: Point) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  public distance();
  public distance(x?: Point);
  public distance(x: number | Point, y: number)
  public distance(x?: number | Point, y?: number) {
    if (typeof x === 'number' && y) {
      return this.calculateDistance(this, new Point(x, y));
    }

    if (x instanceof Point) {
      return this.calculateDistance(this, x);
    }

    return this.calculateDistance(this, new Point());
  }
}
