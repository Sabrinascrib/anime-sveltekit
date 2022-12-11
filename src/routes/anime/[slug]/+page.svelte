<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log('data', data);
</script>

<section class="flex flex-row">
	<img class="rounded-xl" src={data.anime.data.images.jpg.image_url} alt={data.anime.data.title} />
	<div class="">
		<h2>{data.anime.data.title}</h2>
		<p>{data.anime.data.synopsis}</p>
		<p>{data.anime.data.rating}</p>
	</div>
</section>
