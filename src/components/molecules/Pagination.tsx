"use client";
import { type Route } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";

interface PaginationProps {
	totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
	const [_, basePath, pageNumber] = usePathname().split("/");
	const previousPagePath = `/${basePath}/${Math.max(Number(pageNumber) - 1, 1)}`;
	const nextPagePath = `/${basePath}/${Math.min(Number(pageNumber) + 1, totalPages)}`;

	return (
		<div className="mt-10 flex">
			<Link href={previousPagePath as Route} className="text-xl mr-4">
				⬅️
			</Link>
			<ul className="flex">
				{Array.from({ length: totalPages }).map((_, index) => (
					<li key={index} className="mx-2  text-lg">
						<ActiveLink href={`/${basePath}/${index + 1}` as Route}>{index + 1}</ActiveLink>
					</li>
				))}
			</ul>
			<Link href={nextPagePath as Route} className="text-xl ml-4">
				➡️
			</Link>
		</div>
	);
};
