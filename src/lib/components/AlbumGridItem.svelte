<script>
  export let album;
  console.log(album);
  const imageUrl = album.attributes.cover.data ? `https://strapi-maione.nlj.uber.space${album.attributes.cover.data.attributes.formats.large.url}` : '';
</script>

<div class="container">
  <div class="content">
   <div class="image"><img src={imageUrl} alt="cover"/></div>
   <div class="title">{album.attributes.title}</div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    padding: 20px;
    /* height: 100%;
    object-fit: contain;
    border: 1px solid #fff;
    padding-top: 80%;
    position: relative; */
    font-size: 14px;
    /* background-color: #222;
    color: #fff; */
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* border: 1px solid #ccc; */


  }

  .content {
    height: 100%;
    /* padding: 10px 20px 40px 20px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }

  .title {
    display: flex;
    /* justify-self: flex-end; */
    padding-top: 10px;
    /* text-align: center; */
    font-size: 12px;
  }

  .container:hover {
    /* transition: border ease-in 200ms;
    border: 1px solid #aaa; */
  }

  .image {
    display: flex;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  img {
    object-fit: contain;
    display: inline-block;
    vertical-align: top;
    width: 90%;
    border: 1px solid #ccc;
  }

  @media(min-width: 740px) {
    img {max-height: 400px;}
  }
</style>