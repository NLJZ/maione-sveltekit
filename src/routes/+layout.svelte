<script>
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';
  import { page } from '$app/stores';
  import '../app.css';

  export let data;
  const albums = writable();
  setContext('albums', albums);
  const photos = writable();
  setContext('photos', photos);

  $: albums.set(data.albums);
  $: photos.set(data.photos);

  let year =  new Date().getFullYear();

</script>

<svelte:head>

</svelte:head>

<nav>
  <div class="fixed-inner nav-inner">
    <a href="/" class="site-title">davide maione</a><span class="right"><a href="/work" class:active="{$page.url.pathname.includes("/work")}">work</a><a href="/about" class:active="{$page.url.pathname.includes("/about")}">about</a></span>
  </div>
</nav>

<main class="main-wrapper">
  <slot />
</main>

<style>
  .main-wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
    position: relative;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 100;
    height: 40px;
    background: #fff;
  }

  .fixed-inner {
    width: 100%;
    display: flex;
    color: #222;
    justify-content: space-between;
    padding: 0 20px;
    position: relative;
    align-items: center;
  }

  .nav-inner {
    padding: 10px 80px;
  }

  .site-title {
    color: #222;
    text-decoration: none;
    font-size: 12px;
  }

  a {
    transition: all ease-in-out 200ms;
    color: #222;
    font-size: 12px;
  }

  a:hover {
    opacity: 80%;
    transition: all ease-in-out 200ms;
    opacity: .6;
  }

  .active {
    color: #222;
    transition: all ease-in-out 200ms;
    text-decoration: none;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .right a {
    margin-left: 20px;
  }



</style>