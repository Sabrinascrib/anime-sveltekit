<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log('data', data);
</script>

<section class="">
	<a class="flex flex-row place-items-center text-xl ml-4 mt-4" href="/">
		<svg
			class="text-4xl"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"
			/></svg
		> Back</a
	>
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
