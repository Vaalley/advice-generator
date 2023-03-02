<script>
	import { onMount } from 'svelte';

	let advices = [
		{
			id: 1,
			advice: `A long walk alone with some time to think, can work wonders.`
		},
		{
			id: 2,
			advice: `When faced with a choice, do both.`
		},
		{
			id: 3,
			advice: `If you're squashed close to strangers on public transport, try not to be rude to them. No one likes those situations.`
		},
		{
			id: 4,
			advice: `Give up your seat for someone who needs it.`
		},
		{
			id: 5,
			advice: `To cleanly remove the seed from an Avocado, lay a knife firmly across it, and twist.`
		},
		{
			id: 6,
			advice: `Put a piece of kitchen roll in with your bag of leaves to make them last longer.`
		},
		{
			id: 7,
			advice: `Plant a tree.`
		},
		{
			id: 8,
			advice: `Measure twice, cut once.`
		},
		{
			id: 9,
			advice: `Repeat people's names when you meet them.`
		},
		{
			id: 10,
			advice: `True happiness always resides in the quest.`
		},
		{
			id: 11,
			advice: `Sometimes it's best to ignore other people's advice.`
		},
		{
			id: 12,
			advice: `A nod is as good as a wink to a blind horse.`
		},
		{
			id: 13,
			advice: `Do something selfless.`
		},
		{
			id: 14,
			advice: `What's stopping you?`
		},
		{
			id: 15,
			advice: `Value the people in your life.`
		},
		{
			id: 16,
			advice: `Good advice is something a man gives when he is too old to set a bad example.`
		},
		{
			id: 17,
			advice: `Don't cross the streams.`
		},
		{
			id: 18,
			advice: `Hold the door open for the next person.`
		},
		{
			id: 19,
			advice: `If you find yourself distressed about something, ask yourself if it will still matter tomorrow or next week or next month.`
		},
		{
			id: 20,
			advice: `If you get stuck, try doing the opposite of what the solution requires.`
		},
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
