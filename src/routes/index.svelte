<script>
	export let artists;
</script>

<a href="/about" class="title">
	<h1>Upload AIR</h1>
</a>
<ul>
	{#each artists as artist}
		<li>
			<a href="/{artist['Name']}">{artist['Name']}</a>
		</li>
	{/each}
</ul>

<style>
	.title {
		display: flex;
		justify-content: center;
		text-decoration-thickness: 6%;
	}

	h1 {
		line-height: 1;
		font-size: 14vw;
	}

	ul {
		list-style: none;
		position: absolute;
		top: 70%;
		width: 100%;
		padding: 0;

		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		column-gap: 14vw;
	}

	li {
		display: inline-block;
		font-size: 8vw;
	}
</style>
