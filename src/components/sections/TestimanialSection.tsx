import TestimanialCard from "../cards/TestimanialCard";

const CARDS = [
	{
		comment:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		name: "Satish Patel",
		role: "Founder & CEO, Huddle",
		profile: "/images/profile-1.jpg",
	},
	{
		comment:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		name: "Bruce McKenzie",
		role: "Founder & CEO, Huddle",
		profile: "/images/profile-2.jpg",
	},
	{
		comment:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
		name: "Iva Boyd",
		role: "Founder & CEO, Huddle",
		profile: "/images/profile-3.jpg",
	},
];

function TestimanialSection() {
	return (
		<section class="bg-dark-blue-main py-16 md:py-24">
			<div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="relative z-10 grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_250px),_1fr))] gap-6 grid-rows-[repeat(2,_auto)]">
					<span class="inline-block -z-10 bg-[url(/images/bg-quotes.png)] bg-no-repeat bg-contain absolute size-10 -top-8 md:-left-5 md:-top-4" />
					{CARDS.map((c) => (
						<TestimanialCard person={c} key={c.name} />
					))}
				</div>
			</div>
		</section>
	);
}

export default TestimanialSection;
