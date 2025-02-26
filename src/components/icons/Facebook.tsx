import { JSX } from "solid-js";

type TiSocialFacebookProps = JSX.IntrinsicElements["svg"] & {};

function TiSocialFacebook(props: TiSocialFacebookProps) {
	return (
		<svg
			fill="currentColor"
			stroke-width="0"
			xmlns="http://www.w3.org/2000/svg"
			baseProfile="tiny"
			version="1.2"
			viewBox="0 0 24 24"
			height="1em"
			width="1em"
			style="overflow: visible; color: currentcolor;"
			{...props}
		>
			<path d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z"></path>
		</svg>
	);
}

export default TiSocialFacebook;
