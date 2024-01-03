<script>
    import { marked } from "marked";
    /** @type {import('./$types').PageData} */
    export let data;
    const cv = marked(data.cv.data.attributes.cv);
    const bio = marked(data.bio.data.attributes.bio)
    const imageUrl = data.artistPhoto.data.attributes.photo.data.attributes.formats.medium.url;
</script>

<svelte:head>
	<title>davide maione - about</title>
</svelte:head>

<div class="container">
    <div>
        <img src={`https://strapi-maione.nlj.uber.space${imageUrl}`} alt='davide maione' />
        <p>
        {@html bio}
        </p>
        
    </div>
    <div>
        <p>
            {@html cv}  
        </p>
    </div>
</div>

<style>
    .container {
        width: 100%;
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    p {
        padding: 0 20px;
    }

    img {
        margin: 20px 0;
        width: 100%;
        max-width: 600px;
    }

    @media(min-width: 560px) {
        img {
            padding: 0 20px;
        }
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