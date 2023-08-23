<script>
  import { swipe } from 'svelte-gestures';
  import { fade, fly, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
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

</script>

{#if imageArray.length}
<div class="top"><div class="left"><span class="progress">{currentIndex + 1}/{imageArray.length}</span></div><div class="bottom"><button on:click={previousImage}>prev</button><span class="line" /><button on:click={nextImage}>next</button></div>
</div>

<div class="container">
  <div class="inner">
    <div use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }} on:swipe={handleSwipe} class="image-holder">
      {#each imageArray as image, i}
      {#if i === currentIndex}
      <img transition:fade src={`https://strapi-maione.nlj.uber.space${image}`} alt='current'/>
      {/if}
    {/each}
    </div>
</div>



</div>
{/if}

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }


  .top {
    padding: 20px 10px 40px 10px;
    display: flex;
    justify-content: space-between;
  }

  .progress {
    font-family:'Courier New', Courier, monospace;
    font-size: 12px;
  }

  .title {
    font-weight: bold;
    font-size: 12px;
    padding-right: 20px;
  }

  .left {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }

  .inner {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .image-holder {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
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
    justify-content: flex-end;
    width: 100%;
    padding-right: 10px;
  }

  .line {
    border-left: 1px solid #ccc;
    margin: 2px 8px;
  }





</style>