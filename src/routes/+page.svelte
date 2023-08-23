<script>
  import { getContext } from 'svelte';
  const photos = getContext('photos');
</script>
<div class="background">
  <img  src='https://strapi-maione.nlj.uber.space/uploads/Foe_Me_10f7b97f2a.jpg' alt="splash" />
</div>

<svelte:head>
	<title>davide maione</title>
</svelte:head>

<style>
.background {
    min-width: 100%;
    height: calc(100vh - 40px);

  }

  img {
    height: calc(100vh - 40px);
    width: 100%;
    object-fit: cover;
  }

</style>

