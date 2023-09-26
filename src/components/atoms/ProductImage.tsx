import Image from "next/image";

type ProductImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};
export const ProductImage = ({ src, alt, width, height }: ProductImageProps) => {
	return (
		<div className="aspect-square">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="h-full w-full object-contain object-center p-4 max-w-sm"
			/>
		</div>
	);
};
