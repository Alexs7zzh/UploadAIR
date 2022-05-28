export async function get() {
	const artists = await fetch(`${import.meta.env.VITE_API}/artists`).then((res) => res.json());

	if (artists) {
		return {
			body: { artists }
		};
	}

	return {
		status: 404
	};
}
