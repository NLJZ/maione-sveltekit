<script>
  import { onMount } from 'svelte';

  export let data;

  let selectedImage;

  onMount(() => {
    if (data && data.splashImages && data.splashImages.data) {
      const splashImages = data.splashImages.data.attributes.splash;
      selectedImage = splashImages[Math.floor(Math.random() * splashImages.length)];
    }
  });

</script>

<div class="background">
  {#if selectedImage}
    <img src={`https://strapi-maione.nlj.uber.space${selectedImage.image.data.attributes.url}`} style={`object-position: ${selectedImage.alignment};`} alt="splash" />
  {/if}
</div>

<svelte:head>
  <title>davide maione</title>
</svelte:head>

<style>
  .background {
    min-width: 100%;
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
  }

  img {
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
    width: 100%;
    object-fit: cover;
  }

  @media(min-width: 601px) {
    .background {
      height: calc(100vh - 56px);
      max-height: calc(100vh - 56px);
    }
    img {
      height: calc(100vh - 56px);
      max-height: calc(100vh - 56px);
    }
  }
</style>
