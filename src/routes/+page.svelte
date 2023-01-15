<script>
	// import ramen from '/assets/ramen.png';

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
			<!-- <img src={ramen} alt="Ramen logo" /> -->
			<h2 class="text-xl">ramen n' chill</h2>
		</div>
		<form on:submit|preventDefault={handleOnSubmit}>
			<input
				class="bg-gray-100 text-xs rounded-sm p-3 font-extralight focus:outline-none"
				type="text"
				name="name"
				bind:value={name}
				placeholder="Search for an anime..."
			/>
			<button
				type="submit"
				class="bg-gray-100 rounded-sm p-3 ml-3 text-sm  duration-75 hover:bg-gray-200 "
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
			<div class=" rounded-sm pt-5 duration hover:bg-gray-100">
				<div class="anime" on:click={getSingleAnime(anime.mal_id)}>
					<a href={`/anime/${anime.mal_id}`}>
						<img
							class="rounded-sm object-cover w-[250px] h-[400px]"
							src={anime.images.jpg.image_url}
							alt={anime.title}
						/></a
					>

					<h2 class="uppercase text-xl font-semibold mt-4 max-w-[250px]">{anime.title}</h2>

					<p>{anime.aired.string}</p>
				</div>
			</div>
		{/each}
	</div>
</main>
<footer class="text-center text-sm py-10">
	Build by anime lover <a
		target="_blank"
		href="https://github.com/Sabrinascrib/anime-sveltekit"
		class="text-gray-500 duration-75
		 hover:text-gray-600">Sabrina Abrodi</a
	>
</footer>

<style>
	main {
		font-family: 'Poppins', sans-serif;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0px 50px;
		align-items: center;
		max-width: 1500px;
		margin: 20px auto;
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo h2 {
		color: #000;
		font-weight: 300;
		text-transform: uppercase;
	}

	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	h4 {
		font-size: 15px;
		text-align: center;
		margin-top: 100px;
		font-weight: 500;
	}

	.animes {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		max-width: 1500px;
		margin: 40px auto 100px auto;
	}

	.anime {
		display: flex;
		flex-direction: column;
		margin: 0px 20px 40px 20px;
	}

	.anime p {
		font-size: 10px;
		color: #686868;
		font-weight: 400;
		margin: 5px 0 0 0;
	}
</style>
