import { Point } from './Point';
import { Shape } from './Shape';

enum TriangleType {
  Equilateral = 'equilateral triangle',
  Isosceles = 'isosceles triangle',
  Scalene = 'scalene triangle'
};

export class Triangle extends Shape {
  constructor(a: Point, b: Point, c: Point);
  constructor(a: Point, b: Point, c: Point, color: string, filled?: boolean);
  constructor(a: Point, b: Point, c: Point, color: string, filled: boolean);
  constructor(a: Point, b: Point, c: Point, color?: string, filled?: boolean) {
    super([a, b, c], color, filled);
  }

  public toString() {
    return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`;
  }

  public getType() {
    const sideAB = this.points[0].distance(this.points[1]);
    const sideBC = this.points[1].distance(this.points[2]);
    const sideCA = this.points[2].distance(this.points[0]);

    if (sideAB === sideBC === sideCA) {
      return TriangleType.Equilateral;
    }

    if (sideAB === sideBC || sideAB === sideCA || sideBC === sideCA) {
      return TriangleType.Isosceles;
    }

    return TriangleType.Scalene;
  }
}