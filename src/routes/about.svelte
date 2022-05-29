<script>
	export let text;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<a href="/" class="title">
	<h1>Upload Artist In Residence</h1>
</a>
<a href="https://www.instagram.com/upload_a_i_r/" class="ins">
	<img src="/instagram.gif" alt="instagram" width="256" height="256" />
</a>
<div>{@html text}</div>

<style>
	.title {
		text-decoration-thickness: 6%;
	}

	h1 {
		line-height: 1;
		font-size: 8vw;
		display: inline-block;
	}

	div {
		max-width: 800px;
		padding: 6em 0;
		margin-left: auto;
		margin-right: auto;
	}

	.ins {
		position: absolute;
		top: 2em;
		right: 2em;
	}

	img {
		width: max(4vw, 2em);
		height: max(4vw, 2em);
	}

	:global(p + p, ul + p) {
		margin-top: 1em;
	}
</style>
