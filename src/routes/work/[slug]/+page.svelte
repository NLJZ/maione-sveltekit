<script>
  import { getContext } from "svelte";
  import { page } from "$app/stores";
  import { marked } from "marked";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  const photos = getContext("photos");
  const albums = getContext("albums");

  const project = $albums.data.find((obj) => {
    return obj.attributes.slug === $page.params.slug;
  });

  const description = marked(project.attributes.description, { breaks: true });

  const imageArray = $photos.data.map(
    (x) => x.attributes.file.data.attributes.formats.large.url
  );
</script>

<div class="content">
  <div class="carousel-holder"><ImageCarousel {imageArray} /></div>
  <div class="description">
    <span class="title">{project.attributes.title}</span>{@html description}
  </div>
</div>

<style>
  .content {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    display: flex;
    align-self: center;
    height: 100%;
    justify-content: center;
    width: 100%;
    gap: 60px;
    align-items: center;
    flex-grow: 2;
    padding-bottom: 100px;
    flex-direction: column;
  }

  .carousel-holder {
    max-width: 700px;
    width: 100%;
  }

  .description {
    max-width: 500px;
    margin-top: 20px;
    padding: 0px 10px 0px 30px;
    margin-right: 20px;
    border-left: 1px solid #cee7d9;
    margin-bottom: 80px;
  }

  @media (min-width: 900px) {
    .description {
      margin-left: 90px;
      max-width: 400px;
    }
    .content {
      flex-direction: row;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
    }

    .carousel-holder {
      width: 80;
    }
  }
</style>
