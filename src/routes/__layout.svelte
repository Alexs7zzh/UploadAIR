<script>
	import '../style.css';
	let x = 0, y = 0;
	let cursor;

	const onMouseMove = e => {
		x = e.clientX - 50
		y = e.clientY - 50
		cursor.style.transform = `translate(${x}px, ${y}px)`
	}
</script>

<svelte:head>
	<title>Upload Artist In Residence</title>
	<meta
		name="description"
		content="Upload AIRは、オンラインコミュニケーションとデータ形式で表現するアートに焦点を当てたオンラインアートコミュニティです。"
	/>
</svelte:head>

<svelte:body on:mousemove={onMouseMove} />
<slot />
<div id="cursor" bind:this={cursor}></div>

<style>
	#cursor {
		background-color: #f95f19;
		height: 100px;
		width: 100px;
		border-radius: 50%;
		position: fixed;
		z-index: 3;
		pointer-events: none;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
	}
</style>