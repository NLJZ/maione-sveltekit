<script>
  import { swipe } from 'svelte-gestures';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  export let imageArray;

  let currentIndex = 0;

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
    console.log('array of images', imageArray)
  });

</script>

{#if imageArray.length}
{#if imageArray.length > 1}
<div class="top"><div class="left"><span class="progress">{currentIndex + 1}/{imageArray.length}</span></div><div class="bottom"><button on:click={previousImage}>prev</button><span class="line" /><button on:click={nextImage}>next</button></div>
</div>
{/if}

<div class="container">
  <div class="inner" use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }} on:swipe={handleSwipe}  > 
      {#each imageArray as image, i}
      {#key i}
      {#if i === currentIndex}

      <img transition:fade src={`https://strapi-maione.nlj.uber.space${image.attributes.file.data.attributes.formats.large.url}`} alt='current'/>
    
      {/if}
      {/key}

    {/each}
   

  </div>
  {#each imageArray as image, i}
  {#if i === currentIndex}
  <ul class="photoInfo">
    <li class="photoTitle">{image.attributes.title}</li>
    <li>{image.attributes.year}</li>
    <li>{image.attributes.format}</li>
    <li>{image.attributes.size}</li>
  </ul>
  {/if}
  {/each}
  </div>






{/if}

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 100%;
  }


  .top {
    padding: 10px 0;
    display: flex;
    width: 100%;
    max-width: 200px;
  }

  .progress {
    font-family:'Courier New', Courier, monospace;
    font-size: 12px;
    color: #000;
  }

  .photoInfo {
    padding-top: 20px;
  }

  .photoInfo > li {
    font-family:'Courier New', Courier, monospace;
  }

  .photoTitle {
    font-style: italic;
  }

  .title {
    font-weight: bold;
    font-size: 12px;
    padding-right: 20px;
  }

  .left {
    display: flex;
    align-items: center;
    padding-right: 20px;
    justify-content: flex-start;
  }

  .inner {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 600px;
    max-height: 600px;
    max-width: 100%;
    aspect-ratio: 1;
    position: relative;
    /* border-top: solid 1px #ccc; */
    /* border-bottom: solid 1px #cee7d9; */
  }

  img {
    position: absolute;
    left: 0;
    object-fit: contain;
    /* width: 100%; */
    height: 100%;
    padding: 20px 0;
  }

  button {
    font-family:'Courier New', Courier, monospace;
    font-size: 12px;
    padding: 8px;
    border: 1px solid transparent;
  }

  button:hover {
    color: #111;
    border: 1px solid #cdcdcd;
    transition: all ease-in-out 500ms;

  }

  .bottom {
    display: flex;
    width: 100%;
  }

  .line {
    border-left: 1px solid #ccc;
    margin: 2px 8px;
  }





</style>