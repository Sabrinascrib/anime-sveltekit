/** @type {import('./$types').PageLoad} */

export async function load({ fetch, page }) {
	const slug = page.params.slug;
	const res = await fetch(`https://api.jikan.moe/v4/anime/${slug}`);
	const anime = await res.json();

	if (res.ok) {
		return {
			props: {
				anime
			}
		};
	}

	return {
		status: res.status,
		error: new Error('Cound lot error')
	};
}
