/**
 * It updates the favicon of the page to the flag of the country that the user is currently in
 * @param {string} countryCode - The country code of the country you want to display the flag of.
 */
import { getFlagEmoji } from "./getFlagEmoji";

export function updateFavicon(countryCode: string) {
  const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
  if (favicon) {
    favicon.href =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      getFlagEmoji(countryCode) +
      "</text></svg>";
  }
}
