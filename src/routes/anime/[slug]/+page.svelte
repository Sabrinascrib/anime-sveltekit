<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log('data', data);
</script>

<section class="">
	<a class="flex flex-row place-items-center text-md md:text-xl ml-4 mt-4" href="/">
		<svg
			class="text-2xl md:text-4xl"
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
	<div
		class="flex flex-col place-items-center max-w-2xl mx-auto place-self-center mt-10 md:mt-52 px-5"
	>
		<div
			class="flex flex-col md:flex-row md:place-items-center justify-evenly mb-10 rounded-sm bg-gray-100 p-10 w-full"
		>
			<div class=" md:w-1/2">
				<img
					class=" md:mx-0 mx-auto rounded-sm h-[400px]"
					src={data.anime.data.images.jpg.image_url}
					alt={data.anime.data.title}
				/>
			</div>
			<div class=" mt-8 md:mt-0 md:ml-5">
				<div class="flex flex-row mb-3">
					<p class="font-bold text-sm text-black">{data.anime.data.type}</p>
					<span class="mx-2 text-black">•</span>
					<p class="font-medium text-sm text-black">{data.anime.data.rating}</p>
				</div>
				<h2 class="text-3xl text-black uppercase mb-4 font-extrabold">{data.anime.data.title}</h2>

				<h3 class="mb-2">Status</h3>
				<div class="flex flex-row text-sm ">
					<span class="p-1 rounded-sm text-white bg-sky-400">{data.anime.data.status}</span>
					<span
						class="p-1 ml-2 text-white rounded-sm bg-amber-400
					">{data.anime.data.year}</span
					>
					<span class="p-1 ml-2 rounded-sm text-white bg-red-500">{data.anime.data.favorites}</span>
				</div>
			</div>
		</div>

		<div class="w-full p-8 rounded-sm border-gray-100 border-solid border-2">
			<h3 class="text-2xl font-bold mb-4">Synopsis</h3>
			<p class="text-gray-600 text-base mb-4">{data.anime.data.synopsis}</p>
			<p class="font-semibold text-sm text-black italic">{data.anime.data.rating}</p>
		</div>
	</div>
</section>

<footer class="text-center text-sm py-10">
	Build by anime lover <a
		target="_blank"
		href="https://github.com/Sabrinascrib/anime-app-svelte"
		class="text-gray-500 duration-75 hover:text-gray-600">Sabrina Abrodi</a
	>
</footer>
