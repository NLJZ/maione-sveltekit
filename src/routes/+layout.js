export const load = async ({ fetch, url }) => {
  const res = await fetch("https://strapi-maione.nlj.uber.space/api/albums?populate=*&sort=id:desc");
  const albums = await res.json();
  const photoRes = await fetch("https://strapi-maione.nlj.uber.space/api/photos?populate=*");
  const photos = await photoRes.json();
  return { albums, photos };
};