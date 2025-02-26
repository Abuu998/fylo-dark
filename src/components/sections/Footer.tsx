import EmailSignup from "../EmailSignup";
import FooterLink from "../FooterLink";
import TiSocialFacebook from "../icons/Facebook";
import IconCircle from "../icons/IconCircle";
import IoLogoInstagram from "../icons/Instagram";
import IoLogoTwitter from "../icons/Twitter";

function Footer() {
	return (
		<footer class="text-white bg-dark-blue-main py-16 md:px-24">
			<div class="wrapper">
				<EmailSignup />
			</div>
			<section class="py-8 bg-dark-blue-footer shadow-[0_0_0_100px_var(--color-dark-blue-footer)]">
				<div class="wrapper space-y-7">
					<img
						src="/images/logo.svg"
						alt="Fylo logo"
						class="block object-cover w-20 sm:w-24 md:w-32"
					/>

					<div class="text-white/80 space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-16">
						<div class="space-y-6 col-span-2">
							<article class="flex items-start gap-4">
								<img
									src="/images/icon-location.svg"
									alt="Location logo"
									class="block object-cover w-4"
								/>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Saepe omnis, ipsa deserunt
									amet quia eligendi? Dolorum perferendis
									voluptatum delectus laborum?
								</p>
							</article>

							<div class="space-y-4">
								<article class="flex items-center gap-4">
									<img
										src="/images/icon-phone.svg"
										alt="Phone icon"
										class="block object-cover w-4"
									/>
									<p>+1-543-123-4567</p>
								</article>

								<article class="flex items-center gap-4">
									<img
										src="/images/icon-email.svg"
										alt="Email icon"
										class="block object-cover w-4"
									/>
									<p>example@fylo.com</p>
								</article>
							</div>
						</div>

						<section class="space-y-8 sm:space-y-0 sm:flex items-start gap-16">
							<div class="space-y-4 grid">
								{["About Us", "Jobs", "Press", "Blog"].map(
									(item) => (
										<FooterLink
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="text-inherit hover:text-white hover:font-semibold place-self-start"
										>
											{item}
										</FooterLink>
									)
								)}
							</div>

							<div class="space-y-4 grid">
								{["Contact Us", "Terms", "Privacy"].map(
									(item) => (
										<FooterLink
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="text-inherit hover:text-white hover:font-semibold place-self-start"
										>
											{item}
										</FooterLink>
									)
								)}
							</div>
						</section>

						<div class="flex items-center justify-center gap-3 py-8 md:py-0 md:items-start">
							<IconCircle class="grid place-content-center border-1 w-7 aspect-square rounded-full hover:border-cyan-gradient cursor-pointer group">
								<FooterLink href="#">
									<TiSocialFacebook class="group-hover:fill-cyan-gradient size-6" />
								</FooterLink>
							</IconCircle>
							<IconCircle class="grid place-content-center border-1 w-7 aspect-square rounded-full hover:border-cyan-gradient cursor-pointer group">
								<FooterLink href="#">
									<IoLogoTwitter class="group-hover:fill-cyan-gradient size-4" />
								</FooterLink>
							</IconCircle>
							<IconCircle class="grid place-content-center border-1 w-7 aspect-square rounded-full hover:border-cyan-gradient cursor-pointer group">
								<FooterLink href="#">
									<IoLogoInstagram class="group-hover:fill-cyan-gradient size-4" />
								</FooterLink>
							</IconCircle>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
