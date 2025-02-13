<script>
	import '../app.css';
	let { children } = $props();
	import smallLogo from '$lib/images/logoSmall.svg';
	import NavButton from '$lib/components/NavButton.svelte';
</script>

<main class="max-w-[1500px] m-auto">
	<div class="m-auto bg-slate-700 mb-16">
		<nav class="md:max-w-full lg:max-w-[60%] flex justify-between px-3">
			<img src = {smallLogo} alt="4s solutions logo">
			<NavButton text="dashboard" link="/"/>
			<NavButton text="database" link="/database"/>
			<NavButton text="analytics" link="/analytics"/>
		</nav>
	</div>
	{@render children()}
</main>


