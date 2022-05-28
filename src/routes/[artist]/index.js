export async function get({ params }) {
	const artist = await fetch(`${import.meta.env.VITE_API}/artists?Name=${params.artist}`).then(
		(res) => res.json()
	);

	if (artist) {
		return {
			body: { artist: artist[0] }
		};
	}

	return {
		status: 404
	};
}
