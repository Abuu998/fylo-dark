import { JSX } from "solid-js";

type IoLogoInstagramProps = JSX.IntrinsicElements["svg"] & {};

function IoLogoInstagram(props: IoLogoInstagramProps) {
	return (
		<svg
			fill="currentColor"
			stroke-width="0"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			style="overflow: visible; color: currentcolor;"
			{...props}
		>
			<path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"></path>
			<path d="M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112Z"></path>
		</svg>
	);
}

export default IoLogoInstagram;
