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
