import { JSX } from "solid-js";

type FooterLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
	className?: string;
};

function FooterLink({ className, ...props }: FooterLinkProps) {
	return (
		<a class={`${className}`} {...props}>
			{props.children}
		</a>
	);
}

export default FooterLink;
