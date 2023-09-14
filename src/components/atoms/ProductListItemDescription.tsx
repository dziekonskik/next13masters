type ProductListItemDescriptionProps = {
	details: {
		title: string;
		category: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	details: { title, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col justify-between text-center">
			<h3 className="text-lg font-semibold text-gray-500 ">{title}</h3>
			<p className="text-sm text-gray-500 ">{category}</p>
			<p className="text-lg font-semibold text-slate-600">${price}</p>
		</div>
	);
};
