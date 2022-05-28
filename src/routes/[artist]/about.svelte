<script>
	export let artist;
</script>

<header>
	<h1>{artist.Name}</h1>
	<a href="/">Upload AIR</a>
</header>
<div>
	{@html artist.Description}
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	h1 {
		line-height: 1;
		font-size: 4em;
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
</style>
