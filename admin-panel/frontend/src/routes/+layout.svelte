<script>
	import '../app.css';
	let { children } = $props();
	import smallLogo from '$lib/images/logoSmall.svg';
	import NavButton from '$lib/components/NavButton.svelte';
</script>

<div class="m-auto bg-slate-700">
	<nav class="2xl:max-w-[40%] xl:max-w-[50%] lg:max-w-[60%] sm:max-w-[100%] flex justify-between px-3">
		<img src = {smallLogo} alt="4s solutions logo">
		<NavButton text={"dashboard"} link={"#top"}/>
		<NavButton text={"products"} link={"#top"}/>
		<NavButton text={"analytics"} link={"#top"}/>
	</nav>
</div>

{@render children()}
