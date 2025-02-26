const testimonies = [
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

export type Testimony = {
	comment: string;
	name: string;
	role: string;
	profile: string;
};

export default testimonies;
