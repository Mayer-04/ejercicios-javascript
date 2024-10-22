import { isPalindrome } from "@js/palindrome.js";
import { describe, test, expect } from "vitest";

describe("Determinar si una palabra o frase es un palíndromo", () => {
  test("No se pasa una palabra o frase a la función", () => {
    const resultado = isPalindrome();
    expect(resultado).toBeNull();
  });

  test("Palabra palindrome", () => {
    const palabra = " OSO ";
    const palabra2 = "ana";
    const palabra3 = "lenguaje";

    expect(isPalindrome(palabra)).toBe(true);
    expect(isPalindrome(palabra2)).toBe(true);
    expect(isPalindrome(palabra3)).toBe(false);
  });
});
