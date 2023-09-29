export const prerender = true;
export const load = async ({ fetch, url }) => {
  const res = await fetch("https://strapi-maione.nlj.uber.space/api/bio");
  const res2 = await fetch("https://strapi-maione.nlj.uber.space/api/artist-photo?populate=deep");
  const res3 = await fetch("https://strapi-maione.nlj.uber.space/api/cv");
  const bio = await res.json();
  const cv = await res3.json();
  const artistPhoto = res2.json();
  return { bio, cv, artistPhoto };
};