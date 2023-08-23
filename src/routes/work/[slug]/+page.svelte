<script>
    import { getContext } from 'svelte';
    import { page } from '$app/stores';
    import { marked } from 'marked';
    import ImageCarousel from '$lib/components/ImageCarousel.svelte';
    const photos = getContext('photos');
    const albums = getContext('albums');

    const project = $albums.data.find(obj => {
        return obj.attributes.slug === $page.params.slug;
    });

    const description = marked(project.attributes.description, {breaks: true});

    const imageArray = $photos.data.map(x=> x.attributes.file.data.attributes.formats.large.url);
</script>

<div class="content">
    <div class="carousel-holder"><ImageCarousel imageArray={imageArray} /></div>
    <div class="description"><span class="title">{project.attributes.title}</span>{@html description }</div>
</div>

<style>
    .carousel-holder {
        max-width: 700px;
        width: 70%;
    }

    .content {
        display: flex;
        align-self: center;
        height: 100%;
        justify-content: center;
        width: 100%;
        gap: 60px;
        align-items: center;
        flex-grow: 2;
        padding-bottom: 100px;
    }

    .description {
        max-width: 400px;
        margin-top: 20px;
        padding: 0px 10px 0px 30px;
        margin-left: 100px;
        margin-right: 20px;
        border-left: 1px solid #CEE7D9;
        margin-bottom: 80px;
    }
</style>