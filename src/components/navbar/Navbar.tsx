const LINKS = ["Features", "Team", "Sign In"];

function Navbar() {
	return (
		<header class="py-8 w-full sticky top-0 bg-dark-blue-intro-email z-20">
			<div class="wrapper flex items-center justify-between">
				<img
					src="/images/logo.svg"
					alt="Fylo logo"
					class="block object-cover w-20 sm:w-24"
				/>

				<nav class="flex items-center gap-4 md:gap-8">
					{LINKS.map((link) => (
						<a
							href="#"
							class="inline-block text-white/70 hover:text-white hover:underline underline-offset-2 transition-all duration-500 ease-in-out"
						>
							{link}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
