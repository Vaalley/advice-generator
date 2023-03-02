<script>
	import { onMount } from 'svelte';

	let advices = [
		{
			id: 1,
			advice: 'A long walk alone with some time to think, can work wonders.'
		},
		{
			id: 2,
			advice: 'Test2'
		},
		{
			id: 3,
			advice: 'Test3'
		},
		{
			id: 4,
			advice: 'Test4'
		}
	];

	function getAdvice() {
		let rng = Math.floor(Math.random() * advices.length);
		let adviceId = document.getElementsByClassName('advice-id')[0];
		let adviceAdvice = document.getElementsByClassName('advice-advice')[0];

		adviceId.innerHTML = `ADVICE #`.concat(advices[rng].id);
		adviceAdvice.innerHTML = `“`.concat(advices[rng].advice).concat(`”`);
	}

	onMount(() => {
		getAdvice();

		window.addEventListener('keydown', (e) => {
			if (e.key === ' ') {
				getAdvice();
			}
		});
	});
</script>

<svelte:head>
	<title>Advice generator</title>
	<link rel="icon" href="/images/favicon-32x32.png" />
</svelte:head>

<main class="w-screen h-screen flex justify-center items-center bg-dark-blue font-roboto">
	<div
		class="w-[600px] h-fit flex flex-col justify-end items-center bg-dark-grayish-blue shadow-2xl rounded-2xl px-4 -md:mx-4"
	>
		<p class="advice-id text-neon-green text-sm tracking-widest font-bold text-center p-10" />

		<p class="advice-advice text-light-cyan text-3xl -md:text-2xl font-semibold text-center mb-auto" />

		<img src="images/pattern-divider-desktop.svg" class="mt-10 mb-4 -md:hidden" alt="Divider desktop" />
		<img src="images/pattern-divider-mobile.svg" class="mt-10 mb-4 hidden -md:block" alt="Divider desktop" />

		<button on:click={getAdvice} class="p-5 bg-neon-green rounded-full w-fit "
			><img src="/images/icon-dice.svg" alt="Dice icon for randon advice" /></button
		>
	</div>
</main>

<style>
	button {
		transform: translate(0%, 50%);
	}
</style>
