import { Testimony } from "@/data/testimonies";
import { JSX } from "solid-js";

type TestimanialCardProps = JSX.HTMLAttributes<HTMLDivElement> & {
	className?: string;
	testimony: Testimony;
};

function TestimanialCard({
	className,
	testimony,
	...props
}: TestimanialCardProps) {
	return (
		<div
			class={`bg-dark-blue-testim p-4 sm:p-6 rounded-md grid grid-cols-1 grid-rows-subgrid row-span-2 ${className}`}
			{...props}
		>
			<p>{testimony.comment}</p>
			<div class="flex items-center gap-3">
				<img
					src={testimony.profile}
					alt={`${testimony.name} profile picture`}
					class="w-9 aspect-square rounded-full block"
				/>
				<div class="">
					<p class="font-bold text-white text-sm">{testimony.name}</p>
					<small class="text-xs">{testimony.role}</small>
				</div>
			</div>
		</div>
	);
}

export default TestimanialCard;
