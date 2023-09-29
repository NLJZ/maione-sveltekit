<script>
    import { marked } from "marked";
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    const cv = marked(data.cv.data.attributes.cv);
    const bio = marked(data.bio.data.attributes.bio)
    const imageUrl = data.artistPhoto.data.attributes.photo.data.attributes.formats.medium.url;
    onMount(()=> {
        console.log(data);
        console.log(imageUrl);
    });
</script>

<svelte:head>
	<title>davide maione - about</title>
</svelte:head>

<div class="container">
    <p>
    {@html bio}
    <img src={`https://strapi-maione.nlj.uber.space${imageUrl}`} alt='davide maione' />
    </p>
    <p>{@html cv}  </p>
</div>

<style>
    .container {
        width: 100%;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    img {
        margin: 20px 0;
    }

    @media(min-width: 1000px) {
        .container {
            flex-direction: row;
            gap: 60px;
            align-items: flex-start;
            justify-content: center;
        }
    }
</style>