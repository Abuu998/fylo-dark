import { JSX } from "solid-js";

type IconCircleProps = JSX.IntrinsicElements["div"] & {
	className?: string;
};

function IconCircle({ className, ...props }: IconCircleProps) {
	return <div class={className} {...props} />;
}

export default IconCircle;
