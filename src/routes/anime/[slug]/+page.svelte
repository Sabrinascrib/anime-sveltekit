<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log('data', data);
</script>

<section class="">
	<div class="flex flex-row place-items-center max-w-6xl mx-auto place-self-center mt-52">
		<div class="w-1/2">
			<img
				class="rounded-xl h-96"
				src={data.anime.data.images.jpg.image_url}
				alt={data.anime.data.title}
			/>
		</div>

		<div class=" w-1/2">
			<h2 class="text-3xl text-black uppercase mb-4 font-extrabold">{data.anime.data.title}</h2>
			<p class="text-gray-800 text-base mb-4">{data.anime.data.synopsis}</p>
			<p class="font-semibold text-sm text-black italic">{data.anime.data.rating}</p>
		</div>
	</div>
</section>
