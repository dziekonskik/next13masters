import { type Product } from "./types";

export const getAllProducts = async () => {
	const products = (await (
		await fetch(`https://naszsklep-api.vercel.app/api/products`)
	).json()) as Product[];

	return products;
};

export const getProducts = async (offset: number = 0) => {
	const products = (await (
		await fetch(`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`)
	).json()) as Product[];

	return products;
};

export const getProductById = async (id: Product["id"]) => {
	const product = (await (
		await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
	).json()) as Product;

	return product;
};
