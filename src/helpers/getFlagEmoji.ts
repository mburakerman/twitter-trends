/**
 * It takes a country code, and returns the emoji flag for that country
 * @param {string} countryCode - The country code of the country you want to get the flag emoji for.
 * @returns A string of the flag emoji for the country code passed in.
 */
export function getFlagEmoji(countryCode: string) {
  if (countryCode === "worldwide")
    return String.fromCodePoint(...[0x1f30d]) + " ";
  const codePoints: number[] = Array.from(countryCode.toUpperCase()).map(
    (char: string) => 127397 + char.charCodeAt(0)
  );

  return String.fromCodePoint(...codePoints) + " ";
}
