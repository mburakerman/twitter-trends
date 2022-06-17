export function getFlagEmoji (countryCode : string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char : any) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints) + ' '
}
