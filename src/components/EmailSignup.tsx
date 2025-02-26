function EmailSignup() {
	return (
		<div class="bg-dark-blue-intro-email p-6 sm:p-10 rounded-xl max-w-2xl mx-auto justify-self-center space-y-6 text-center relative z-50">
			<h2 class="text-xl font-semibold">Get early access today</h2>
			<p class="text-sm text-white/90">
				It only takes a minute to sign up and our free starter tier is
				extremely generous. If you have any questions, our support team
				would be happy to help you.
			</p>

			<form class="max-sm:space-y-5 sm:flex items-center gap-4 mt-6">
				<input
					type="text"
					placeholder="example@email.com"
					class="py-3 px-6 block w-full rounded-full bg-white placeholder:text-gray-500 sm:flex-1"
				/>
				<button
					type="submit"
					class="inline-block max-sm:w-full py-3 px-6 rounded-full transition-colors duration-500 ease-in-out bg-cyan-gradient/90 hover:bg-cyan-gradient/70 font-bold cursor-pointer"
				>
					Get Started For Free
				</button>
			</form>
		</div>
	);
}

export default EmailSignup;
