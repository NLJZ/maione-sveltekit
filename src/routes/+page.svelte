<script>
  export let data;
  const url = data.splashImages.data.attributes.image.data.find(obj => obj.id === 11).attributes.url;
</script>
<div class="background">
  <img src={`https://strapi-maione.nlj.uber.space${url}`} alt="splash" />
</div>

<svelte:head>
	<title>davide maione</title>
</svelte:head>

<style>
.background {
    min-width: 100%;
  }

  img {
    height: calc(100vh - 50px);
    max-height: calc(100dvh - 50px);
    width: 100%;
    object-fit: cover;
  }

  @media(min-width: 601px) {
    img {
      height: calc(100vh - 56px);
      max-height: calc(100dvh - 56px);
    }
  }

</style>

