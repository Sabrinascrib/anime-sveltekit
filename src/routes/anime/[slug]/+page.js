/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	const res = await fetch(`https://api.jikan.moe/v4/anime/${params.slug}`);
	const anime = await res.json();

	console.log(anime);

	return {
		anime
	};
}
