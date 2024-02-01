export const load = async ({ fetch, url }) => {
  const res = await fetch("https://strapi-maione.nlj.uber.space/api/albums?populate=deep&sort=id:desc");
  const res2 = await fetch("https://strapi-maione.nlj.uber.space/api/splash-image?populate=deep");
  const res3 = await fetch("https://strapi-maione.nlj.uber.space/api/commercial-albums?populate=deep&sort=id:desc");
  const albums = await res.json();
  const splashImages = await res2.json();
  const commercialAlbums = await res3.json();
  return { albums, splashImages, commercialAlbums };
};