<script>
	import { onMount } from 'svelte';
	onMount(() => {
		fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
			.then((response) => response.json())
			// .then((result) => (animes = result.data));
			.then((result) => console.log(result.data));
	});
</script>

<section>
	<h1>hello</h1>
	<!-- svelte-ignore missing-declaration -->
	<img src={anime.images.jpg.image_url} alt={anime.title} />
</section>
