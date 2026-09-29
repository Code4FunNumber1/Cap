const FEED = "https://pokeapi.co/api/v2/pokemon";

/** Fetch the feed and hand back the raw JSON, exactly as the API sent it. */
export async function loadRaw(doFetch = fetch) {
  const response = await doFetch(FEED);
  return response.json();
}