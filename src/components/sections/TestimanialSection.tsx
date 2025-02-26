import TestimanialCard from "../cards/TestimanialCard";
import testimonies from "@/data/testimonies";

function TestimanialSection() {
	return (
		<section class="bg-dark-blue-main py-16 md:py-24">
			<div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="relative z-10 grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_250px),_1fr))] gap-6 grid-rows-[repeat(2,_auto)]">
					<span class="inline-block -z-10 bg-[url(/images/bg-quotes.png)] bg-no-repeat bg-contain absolute size-10 -top-8 md:-left-5 md:-top-4" />
					{testimonies.map((testim) => (
						<TestimanialCard testimony={testim} />
					))}
				</div>
			</div>
		</section>
	);
}

export default TestimanialSection;
