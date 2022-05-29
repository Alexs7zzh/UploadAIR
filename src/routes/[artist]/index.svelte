<script>
	export let artist;
</script>

<header>
	<a href="/{artist.Name}/about" style="text-decoration-thickness:6%"><h1>{artist.Name}</h1></a>
	<a href="/">Upload AIR</a>
</header>
<div>
	{#if artist.Work[0].Asset[0].mime === 'video/mp4'}
		<video controls crossorigin="anonymous" width="100%">
			<source src="{import.meta.env.VITE_API}{artist.Work[0].Asset[0].url}" type="video/mp4" />
			<track kind="captions" />
		</video>
	{/if}
	<p class="subtitle">{artist.Work[0].Title}</p>
	<p class="subtitle">{artist.Work[0].Date}</p>
	{#if artist.Work[0].Description2}
		<p class="subtitle">{artist.Work[0].Description2}</p>
	{/if}
	<p class="description">{artist.Work[0].Description}</p>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	h1 {
		line-height: 1;
		font-size: 4rem;
	}

	a {
		font-size: 2em;
	}

	div {
		max-width: 800px;
		padding: 6em 0;
		margin-left: auto;
		margin-right: auto;
	}

	video {
		margin-bottom: 2em;
	}

	.subtitle {
		text-align: center;
		font-size: 1.6em;
		margin-top: 0.5em;
	}

	.description {
		margin-top: 1em;
	}
</style>
