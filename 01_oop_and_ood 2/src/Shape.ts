import { Point } from './Point';

export abstract class Shape {
  abstract getType(): string;

  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length <= 2) {
      throw Error('Just a line!');
    }

    this.points = points;
    this.color = color ? color : 'green';
    this.filled = typeof filled === 'boolean' ? filled : true;
  }

  public toString() {
    const pointsString = this.points.map(point => point.toString()).join(', ');
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsString}.`
  }

  public getPerimeter() {
    const points = [...this.points];
    const firstPoint = points.shift();
    let perimeter = points[points.length - 1].distance(firstPoint);

    points.reduce((prevPoint, point) => {
      perimeter += point.distance(prevPoint);
      return point;
    }, firstPoint);

    return perimeter;
  }
}
