<script>
  import { getContext, onMount } from "svelte";
  import { page } from "$app/stores";
  import { marked } from "marked";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  const albums = getContext("albums");

  const project = $albums.data.find((obj) => {
    return obj.attributes.slug === $page.params.slug;
  });

  const description = marked(project.attributes.description, { breaks: true });

</script>

<svelte:head>
	<title>davide maione - {project.attributes.title}</title>
</svelte:head>

<div class="content">
  
  <div class="carousel-holder">
   
    <div>
    <ImageCarousel imageArray={project.attributes.photos.data} />
    </div>
  </div>
  <div class="description">
    <div class="albumTitle">{project.attributes.title}</div>
    {@html description}
  </div>
</div>

<style>
  .content {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
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

  .albumTitle {
    padding-bottom: 10px;
    font-family:'Times', serif;
    font-weight: bold;
    font-size: 20px;
    /* text-decoration: underline; */
    border-bottom: 1px solid #ccc;
    max-width: 600px;
    width: 100%;
  }

  .carousel-holder {
    max-width: 100%;
    height: 100%;
    order: 2;
  }

  .description {
    max-width: 600px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 80px; */
  }
  
  @media (min-width: 900px) {
    .description {
      max-width: 450px;
      max-height: 600px;
    }
    .content {
      flex-direction: row;
      padding-top: 80px;
    }
    
    .carousel-holder {
      max-width: 700px;
      order: 0;
      width: 50%;
    }
  }
</style>
