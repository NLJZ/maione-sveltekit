<script>
  import { getContext } from 'svelte';
  import AlbumGridItem from '../../lib/components/AlbumGridItem.svelte';
	const albums = getContext('albums');
</script>
<svelte:head>
	<title>davide maione - work</title>
  {#each $albums.data as album}
  <link rel="prefetch" as="image" href={`https://strapi-maione.nlj.uber.space${album.attributes.cover.data.attributes.formats.large.url}`} />
  {/each}
</svelte:head>

<div class="container">
	<div class="grid">
    {#each $albums.data as album}
      <a href={`/work/${album.attributes.slug}`}><AlbumGridItem album={album} /></a>
    {/each}
  </div>

</div>

<style>

	.container {
    flex-grow: 2;
    height: 100%;
	}

  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    padding: 20px 0 200px 0;
  }

  @media(min-width: 640px) {
    .grid {
      padding-top: 40px;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media(min-width: 1000px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
      padding-right: 20px;
      padding-left: 20px;
      gap: 30px;
    }
  }

  @media(min-width: 1400px) {
    .container {
      padding-right: 40px;
      padding-left: 40px;
    }
  }

</style>