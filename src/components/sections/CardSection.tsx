import Card from "../cards/Card";
import services from "@/data/services";

function CardSection() {
	return (
		<section class="bg-dark-blue-main py-16 md:py-24">
			<div class="w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div class="max-w-[1100px] justify-self-center grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_400px),_1fr))] grid-rows-[90px_auto_auto] gap-x-8 gap-y-4">
					{services.map((service) => (
						<Card class="grid grid-cols-1 grid-rows-subgrid row-span-3 text-center space-y-4 max-w-lg mx-auto w-full">
							<img
								src={service.image}
								alt="access-anywere Icon"
								class="mx-auto block"
							/>
							<h2 class="text-xl lg:text-2xl">{service.title}</h2>
							<p>{service.description}</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default CardSection;
