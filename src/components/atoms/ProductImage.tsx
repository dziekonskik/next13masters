type ProductImageProps = {
	src: string;
	alt: string;
};
export const ProductImage = ({ src, alt }: ProductImageProps) => {
	return (
		<div className="aspect-square">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-contain object-center p-4 max-w-sm"
			/>
		</div>
	);
};
