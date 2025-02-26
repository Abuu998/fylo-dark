import { JSX } from "solid-js";

type SectionsProps = JSX.HTMLAttributes<HTMLDivElement> & {
	className?: string;
};

function Section({ className, children }: SectionsProps) {
	return <section class={`py-12 ${className}`}>{children}</section>;
}

export default Section;
