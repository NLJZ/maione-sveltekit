<script>
  import { getContext } from 'svelte';
  import AlbumGridItem from '../../lib/components/AlbumGridItem.svelte';
	const albums = getContext('albums');
</script>
<svelte:head>
	<title>davide maione - work</title>
</svelte:head>

<div class="container">
	<div class="grid">
    {#each $albums.data as album, i}
      <a href={`/work/${album.attributes.slug}`}><AlbumGridItem album={album} /></a>
    {/each}
  </div>

</div>

<style>

	.container {
    flex-grow: 2;
		padding: 0 20px;
    height: 100%;
    min-height: 100%;
	}

  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    padding: 20px 0 200px 0;
  }

  .grid > a {
    filter: drop-shadow(1px 1px 1px #ccc);
  }

  @media(min-width: 640px) {
    .grid {
      padding-top: 60px;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  @media(min-width: 1000px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
      padding-right: 40px;
      padding-left: 40px;
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