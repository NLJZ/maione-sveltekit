<script>
  import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
  import { onDestroy, onMount } from 'svelte';
  import { swipe } from 'svelte-gestures';
  import { fade } from 'svelte/transition';
  import RightIcon from "$lib/components/icons/RightIcon.svelte";
  import LeftIcon from "$lib/components/icons/LeftIcon.svelte";
  import CloseIcon from "$lib/components/icons/CloseIcon.svelte";
  export let imageArray;
  export let startIndex;
  export let handleHide;

  let currentIndex = startIndex;

  let container;

  
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
  }

  function previousImage() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  }

  function handleSwipe(event) {
    const direction = event.detail.direction;
    direction === 'left' ? nextImage() : previousImage();
  }

  onMount(()=> {
    disableBodyScroll(container);
  });

  onDestroy(()=> {
    clearAllBodyScrollLocks();
  })

</script>

<div bind:this={container} class="container">
  <div class="inner" use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }} on:swipe={handleSwipe}  > 
      {#each imageArray as image, i}
      {#key i}
      {#if i === currentIndex}

      <img transition:fade src={`https://strapi-maione.nlj.uber.space${image.attributes.file.data.attributes.url}`} alt='current'/>
    
      {/if}
      {/key}

    {/each}
  </div>

  <button class="control prev" on:click={previousImage}><span class="arrow nav navPrev"><LeftIcon /></span></button>
  <button class="control next" on:click={nextImage}><span class="arrow nav navNext"><RightIcon /></span></button>
  <button class="close" on:click={()=> handleHide()}><CloseIcon /></button>

</div>

<style>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: #222;
  }

  button {
    background: transparent;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(7, 7, 7, 0.1);
  }



  .control {
    opacity: 0;
    width: 33%;
    position: absolute;
    top: 0;
    bottom: 0;
    color: #fff;
    transition: all ease-in-out 500ms;
    display: grid;
  }

  .nav {
    display: flex;
    opacity: 1;
    color: #fff;
    border-radius: 50%;
    background-color: rgba(7, 7, 7, 0.3);
    padding: 20px;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
  .navPrev {
    display: flex;
   justify-self: flex-start;
   align-self: center;
   margin-left: 10px;
  }

  .navNext {
    display: flex;
    justify-self: flex-end;
    align-self: center;
    margin-right: 10px;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }



  .inner {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (hover: hover) { 
    .close {
      transition: all ease-in-out 500ms;
      animation-duration: 3s;
      animation-name: fadeOut;
      width: 80px;
      height: 80px;
      padding: 30px;
      opacity: 0;
    }

    .close:hover, .control:hover {
      opacity: 1
    }

    .control {
      animation-duration: 2s;
      animation-name: fadeOut;
    }
  }

  @keyframes fadeOut {
    0%   {opacity: 1}
    100% {opacity: 0;}
  }








</style>