type ProductListItemDescriptionProps = {
	details: {
		name: string;
		category: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	details: { name, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col justify-between">
			<h3 className="text-lg font-semibold text-gray-500 text-center">{name}</h3>
			<p className="text-sm text-gray-500 text-center">{category}</p>
			<p className="text-lg font-semibold">${price}</p>
		</div>
	);
};
