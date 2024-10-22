import { trianguloRectangulo } from "@js/triangulo-rectangulo.js";
import { expect, test, describe } from "vitest";

describe("Calcular el área de un triángulo rectángulo", () => {
  test("Calcular el tamaño de un triángulo rectángulo", () => {
    const areaTriangulo = trianguloRectangulo(5, 6);
    expect(areaTriangulo).toBe(areaTriangulo);
  });
});
