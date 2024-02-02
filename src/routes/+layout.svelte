<script>
  import "@fontsource/roboto";
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';
  import { navigating, page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import '../app.css';

  export let data;
  const albums = writable();
  setContext('albums', albums);
  const commercialAlbums = writable();
  setContext('commercialAlbums', commercialAlbums);
  $: albums.set(data.albums);
  $: commercialAlbums.set(data.commercialAlbums);
  let year =  new Date().getFullYear();
  // when teh route changes toggle the menu


  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  navigating.subscribe(() => {
    menuOpen = false;
  });

  let mobileMenu;

onMount(async () => {
  const handleClickOutside = (event) => {
    if (menuOpen && mobileMenu && !mobileMenu.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
      menuOpen = false;
    }
  };

  // Wait for the next microtask to ensure the menu is fully opened
  await tick();
  window.addEventListener('touchstart', handleClickOutside, true); // useCapture = true
  window.addEventListener('click', handleClickOutside, true); // useCapture = true

  return () => {
    window.removeEventListener('touchstart', handleClickOutside, true); // useCapture = true
    window.removeEventListener('click', handleClickOutside, true); // useCapture = true
  };
});

</script>

<svelte:head>
	<title>davide maione</title>
</svelte:head>

<nav>
  <div class="fixed-inner nav-inner">
    <a href="/" class="site-title">davide maione</a>
    <div bind:this={mobileMenu} class="mobileMenu" class:open={menuOpen}><a href="/work" class:active="{$page.url.pathname.includes("/work")}">work</a><a href="/commissions" class:active="{$page.url.pathname.includes("/commissions")}">commissions</a><a href="/about" class="smallLink" class:active="{$page.url.pathname.includes("/about")}">about</a><a href="/contact" class="smallLink" class:active="{$page.url.pathname.includes("/contact")}">contact</a></div>
    <div class="right" class:open={menuOpen}><a href="/work" class:active="{$page.url.pathname.includes("/work")}">work</a><a href="/commissions" class:active="{$page.url.pathname.includes("/commissions")}">commissions</a><a href="/about" class="smallLink" class:active="{$page.url.pathname.includes("/about")}">about</a><a href="/contact" class="smallLink" class:active="{$page.url.pathname.includes("/contact")}">contact</a></div>
    <button class="hamburger-menu" class:open={menuOpen} on:click|stopPropagation={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </button>
    
  </div>
</nav>

<main class="main-wrapper">
  <slot />
</main>

<footer>
  &copy; Davide Maione {year}
</footer>

<style>
  .main-wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 100;
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
    padding: 10px 20px;
  }

  .site-title {
    color: #222;
    text-decoration: none;
  }

  a {
    transition: all ease-in-out 200ms;
    color: #777;
    font-size: 20px;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    color: #222;
    transition: all ease-in-out 200ms;
  }

  .active {
    color: #222;
    transition: all ease-in-out 200ms;
    text-decoration: none;
  }




  footer {
    font-size: 12px;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    text-align: right;
    width: 100%;
  }

  .hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.hamburger-menu div {
  width: 100%;
  height: 2px;
  background: #333;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger-menu.open div:nth-child(1) {
  transform: rotate(45deg);
}

.hamburger-menu.open div:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open div:nth-child(3) {
  transform: rotate(-45deg);
}

  .mobileMenu {
    position: fixed;
    right: -500px;
    transition: all ease-in-out 300ms;
    display: flex;
    flex-direction: column;
    top: 51px;
    background: #fff;
    padding: 10px 20px;
    z-index: 200;
    border: 1px solid black;
    border-right: 0px;
    align-items: flex-end;
    gap: 10px;
    opacity: 0;
    max-width: 100vw;
  }

  .mobileMenu.open {
    transition: all ease-in-out 300ms;
    right: 0;
    opacity: 1;
  }

  .right {
    display: none;
  }

  @media(min-width: 750px) {
    .hamburger-menu {
      display: none;
    }

    .mobileMenu {
      display: none;
    }


  .right {
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    border: none;
    top: 0;
    right: 0;
    opacity: 1;
  }

  .right a {
    margin-left: 20px;
  }
  }

  @media(min-width: 601px) {
    .site-title{
      font-size: 24px;
    }

    a {
      font-size: 24px;
    }
  }

  @media(min-width: 1400px) {
    .nav-inner {
      padding: 10px 60px;
    }
}



</style>