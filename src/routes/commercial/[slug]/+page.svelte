<script>
  import { getContext, onMount } from "svelte";
  import { page } from "$app/stores";
  import { marked } from "marked";
  import { fade } from 'svelte/transition';
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";

  const albums = getContext("commercialAlbums");

  const project = $albums.data.find((obj) => {
    return obj.attributes.slug === $page.params.slug;
  });

  let fullscreen = false;
  let startIndex = 0;

  let description;

  if (project && project.attributes && project.attributes.description) {
    description = marked(project.attributes.description, { breaks: true });
  }
  const imageArray = project.attributes.commercial_photos.data || [];

  const getImageUrl = (image) => {
    const largeUrl = image.attributes.image.data.attributes.formats.large?.url;
    const mediumUrl = image.attributes.image.data.attributes.formats.medium?.url;
    const originalUrl = image.attributes.image.data.attributes.url;

    return largeUrl || mediumUrl || originalUrl;
  };

  const handleHide = () => {
    return fullscreen = false;
  }
</script>

<svelte:head>
	<title>davide maione - {project.attributes.client}</title>
</svelte:head>

<div class="content">
  <h1>{project.attributes.client}</h1>
  <div class="images">
    {#each imageArray as image, i}
      <button class="fullButton" on:click={()=> {startIndex = i; return  fullscreen = true;}}>
        <img src={`https://strapi-maione.nlj.uber.space${getImageUrl(image)}`} width={`${image.attributes.image.data.attributes.width}`} height={`${image.attributes.image.data.attributes.height}`} style="aspect-ratio: {`${image.attributes.image.data.attributes.width} / ${image.attributes.image.data.attributes.height}`}" alt='current'/></button>
      <ul class="photoInfo">
        <li class="photoTitle">{#if image.attributes.description}{image.attributes.description}{/if} {#if image.attributes.year}({image.attributes.year}){/if}</li>

      </ul>
    {/each}
  </div>
  {#if description}
  <div class="description">
    {@html description}
  </div>
  {/if}
  {#if fullscreen}
  <div transition:fade>
  <ImageCarousel  handleHide={handleHide} imageArray={imageArray} startIndex={startIndex} />
  </div>
  {/if}
</div>

<style>
  .content {
    padding-top: 20px;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    padding-bottom: 100px;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
  }

  .images {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  .photoInfo > li {
    font-family:'Courier New', Courier, monospace;
    font-size: 14px;
    text-align: right;
  }

  .photoInfo {
    padding: 10px 10px 40px 10px;
  }

  .description {
    padding: 20px;
    margin: 0 auto;
  }

  .fullButton {
    width: 100%;
  }

  .fullButton:hover {
    cursor: -moz-zoom-in; 
    cursor: -webkit-zoom-in; 
    cursor: zoom-in;
  }

  h1 {
    font-weight: normal;
    text-align: center;
    padding: 20px 10px 40px 10px;
    font-size: 24px;
  }

  @media(min-width: 910px) {
    .photoInfo {
      padding-right: 0;
    }
  }

</style>
