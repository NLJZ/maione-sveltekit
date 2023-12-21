<script>
    const getImageUrl = (coverData) => {
    const largeUrl = coverData.attributes.formats.large?.url;
    const mediumUrl = coverData.attributes.formats.medium?.url;
    const originalUrl = coverData.attributes.url;
    return mediumUrl || largeUrl || originalUrl;
  };
  export let album;
  const imageUrl = album.attributes && album.attributes.cover.data ? `https://strapi-maione.nlj.uber.space${getImageUrl(album.attributes.cover.data)}` : '';
  const height = album.attributes && album.attributes.cover.data ? `${album.attributes.cover.data.attributes.height}` : '';
  const width = album.attributes && album.attributes.cover.data ? `${album.attributes.cover.data.attributes.width}` : '';
  const aspectRatio = `${width} / ${height}`;
  const imageStyle = aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''; // Create the style attribute

</script>

<div class="container">
  <div class="content">
   <div class="image"><img src={imageUrl} height={height} width={width} style={imageStyle} alt="cover" loading="lazy" /></div>
   <div class="title">{album.attributes.title}</div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    padding: 0 0 20px 0;
    font-size: 14px;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .title {
    display: flex;
    padding-top: 10px;
    font-size: 12px;
    font-family: 'Roboto', 'Helvetica', 'Verdana', 'Arial', sans-serif;
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
    width: 100%;
    height: 100%;
  }

  @media(min-width: 740px) {
    img {max-height: 400px;}
  }
</style>