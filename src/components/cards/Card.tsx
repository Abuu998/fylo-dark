import { JSX } from "solid-js";

type CardProps = JSX.HTMLAttributes<HTMLDivElement> & {
	className?: string;
};

function Card({ className, children, ...props }: CardProps) {
	return (
		<div class={`p-6 ${className}`} {...props}>
			{children}
		</div>
	);
}

export default Card;
