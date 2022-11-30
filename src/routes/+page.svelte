<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	let name = '';
	export let animes = [];
	onMount(() => {
		fetch(`https://api.jikan.moe/v4/anime?q=${name}&sfw`)
			.then((response) => response.json())
			.then((result) => (animes = result.data));
		// .then(result => console.log(result.data))
	});

	function handleOnSubmit() {
		fetch(`https://api.jikan.moe/v4/anime?q=${name}&sfw`)
			.then((response) => response.json())
			.then((result) => (animes = result.data))
			.then((result) => console.log(result));
	}

	function getSingleAnime(id) {
		fetch(`https://api.jikan.moe/v4/anime/${id}`)
			.then((response) => response.json())
			.then((result) => (animes = result.data))
			.then((result) => console.log(result));
	}
</script>

<main>
	<nav>
		<div class="logo">
			<h2>ramen n' chill</h2>
		</div>
		<form on:submit|preventDefault={handleOnSubmit}>
			<input type="text" name="name" bind:value={name} placeholder="Search for an anime..." />
			<button type="submit"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
					/></svg
				></button
			>
		</form>
	</nav>
	<h4>Animes</h4>
	<div class="animes">
		{#each animes as anime (anime.mal_id)}
			<div on:click={getSingleAnime(anime.mal_id)} class="anime">
				<img src={anime.images.jpg.image_url} alt={anime.title} />
				<h2>{anime.title}</h2>
				<p>{anime.aired.string}</p>
			</div>
		{/each}
	</div>

	<footer>
		Build by anime lover <a target="_blank" href="https://github.com/Sabrinascrib/anime-app-svelte"
			>Sabrina Abrodi</a
		>
	</footer>
</main>
