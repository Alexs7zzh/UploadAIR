import MarkdownIt from 'markdown-it';

export async function get() {
	const text = await fetch(`${import.meta.env.VITE_API}/project-description`).then((res) =>
		res.json()
	);

	if (text) {
		return {
			body: {
				text: new MarkdownIt().render(text.JP)
			}
		};
	}

	return {
		status: 404
	};
}
