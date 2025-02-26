import Navbar from "./components/navbar/Navbar";
import CardSection from "./components/sections/CardSection";
import IntroSection from "./components/sections/IntroSection";
import StayProductiveSection from "./components/sections/StayProductiveSection";
import TestimanialSection from "./components/sections/TestimanialSection";
import Footer from "./components/sections/Footer";

function App() {
	return (
		<>
			<Navbar />
			<IntroSection />
			<CardSection />
			<StayProductiveSection />
			<TestimanialSection />
			<Footer />

			<section class="py-6 bg-dark-blue-footer text-white">
				<div class="wrapper">
					<p class="text-sm text-center">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							class="text-cyan-gradient"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/Abuu998"
							target="_black"
							class="text-cyan-gradient"
						>
							Abubakar NDUWIMANA
						</a>
						.
					</p>
				</div>
			</section>
		</>
	);
}

export default App;
