"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";

interface PaginationProps {
	totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
	const [_, basePath, pageNumber] = usePathname().split("/");

	return (
		<div className="mt-10 flex">
			<Link href={`/${basePath}/${Math.max(Number(pageNumber) - 1, 1)}`} className="text-xl mr-4">
				⬅️
			</Link>
			<ul className="flex">
				{Array.from({ length: totalPages }).map((_, index) => (
					<li key={index} className="mx-2  text-lg">
						<ActiveLink href={`/${basePath}/${index + 1}`}>{index + 1}</ActiveLink>
					</li>
				))}
			</ul>
			<Link
				href={`/${basePath}/${Math.min(Number(pageNumber) + 1, totalPages)}`}
				className="text-xl ml-4"
			>
				➡️
			</Link>
		</div>
	);
};
