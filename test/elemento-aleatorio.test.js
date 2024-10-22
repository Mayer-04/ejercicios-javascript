import { recuperarItem } from "@js/elemento-aleatorio.js";
import { describe, expect, it } from "vitest";

describe("Recuperar un elemento aleatorio de un array", () => {
  it("Recuperar un elemento aleatorio de un array", () => {
    const items = ["🦁", "🐅", "🐆", "🐺"];
    const result = recuperarItem(items);
    expect(items).toContain(result);
  });

  it("Recuperar un elemento aleatorio de un array con un solo elemento", () => {
    const items = ["🦁"];
    const result = recuperarItem(items);
    expect(items).toContain(result);
  });

  it("Recuperar un elemento aleatorio de un array vacio", () => {
    const items = [];
    const result = recuperarItem(items);
    expect(result).toBe(undefined);
  });
});
