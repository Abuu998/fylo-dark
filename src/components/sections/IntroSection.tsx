function IntroSection() {
	return (
		<section class="relative isolate py-16 md:py-24 bg-[url(/images/bg-curvy-mobile.svg)] md:bg-[url(/images/bg-curvy-desktop.svg)] bg-no-repeat bg-bottom bg-contain">
			<div class="wrapper flex flex-col items-center">
				<img
					src="/images/illustration-intro.png"
					alt="Illustration Intro svg"
					class="block w-[min(100%,_500px)]"
				/>

				<div class="mt-8 text-center max-w-xl lg:text-lg">
					<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider">
						All your files in one secure location, accessible
						anywhere
					</h2>
					<p class="mt-6">
						Fylo stores all your most important files in one secure
						location. Access them wherever you need, share and
						collaborate with friends family, and co-workers.
					</p>
					<a
						href="#"
						class="inline-block w-[min(75%,_300px)] mt-8 py-3 px-6 rounded-full transition-colors duration-500 ease-in-out bg-cyan-gradient/90 hover:bg-cyan-gradient/70 font-bold"
					>
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
}

export default IntroSection;
