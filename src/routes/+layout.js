export const load = async ({ fetch, url }) => {
  const res = await fetch("https://strapi-maione.nlj.uber.space/api/albums?populate=deep&sort=id:desc");
  const albums = await res.json();
  return { albums };
};