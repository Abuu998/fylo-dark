function StayProductiveSection() {
	return (
		<section class="bg-dark-blue-main py-16 md:py-24">
			<div class="wrapper">
				<div class="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_400px),_1fr))] gap-8 md:gap-24 lg:gap-32 items-center justify-items-center">
					<img
						src="/images/illustration-stay-productive.png"
						alt="Stay Productive"
						class="block w-full max-w-[400px] lg:justify-self-end"
					/>
					<div class="w-full max-w-[500px] mx-auto justify-self-start sm:text-center md:text-left">
						<h2 class="text-2xl sm:text-3xl md:text-5xl">
							Stay productive, wherever you are
						</h2>
						<p class="mt-6">
							Never let location be an issue when accessing your
							files. Fylo has you covered for all of your file
							storage needs.
						</p>
						<p class="mt-2">
							Securely share files and folders with friends,
							family and colleagues for live collaboration. No
							email attachments required.
						</p>

						<a
							href="#"
							class="inline-block mt-6 text-cyan-gradient hover:text-inherit group"
						>
							<span class="flex items-center gap-2 group border-b-solid border-b-transparent transition-colors duration-500 ease-in-out border-b group-hover:border-b-inherit py-2">
								<span>See how Fylo works</span>

								{/* Because i had to style it on hover */}
								<svg
									width="16"
									height="16"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									class="group-hover:underline underline-offset-8"
								>
									<defs>
										<circle
											id="b"
											cx="6"
											cy="6"
											r="6"
											class="group-hover:fill-white"
										/>
										<filter
											x="-25%"
											y="-25%"
											width="150%"
											height="150%"
											filterUnits="objectBoundingBox"
											id="a"
										>
											<feOffset
												in="SourceAlpha"
												result="shadowOffsetOuter1"
											/>
											<feGaussianBlur
												stdDeviation="1"
												in="shadowOffsetOuter1"
												result="shadowBlurOuter1"
											/>
											<feColorMatrix
												values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
												in="shadowBlurOuter1"
											/>
										</filter>
									</defs>
									<g fill="none" fill-rule="evenodd">
										<g transform="translate(2 2)">
											<use
												fill="#000"
												filter="url(#a)"
												href="#b"
											/>
											<use fill="#62E0D9" href="#b" />
										</g>
										<path
											d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
											fill="#1B2330"
										/>
									</g>
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default StayProductiveSection;
