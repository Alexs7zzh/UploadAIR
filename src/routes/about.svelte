<script>
	export let text;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<a href="/" class="title">
	<h1>Upload Artist In Residence</h1>
</a>
<div>{@html text}</div>

<style>
	.title {
		display: flex;
		justify-content: center;
		text-decoration-thickness: 6%;
	}

	h1 {
		line-height: 1;
		font-size: 8vw;
	}

	div {
		max-width: 800px;
		padding: 6em 0;
		margin-left: auto;
		margin-right: auto;
	}

	:global(p + p, ul + p) {
		margin-top: 1em;
	}
</style>
