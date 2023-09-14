"use client";
import Link from "next/link";
import { type FC } from "react";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";

interface ActiveLinkProps {
	children: React.ReactNode;
	href: Route;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ children, href }) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={clsx("text-blue-500 hover:text-blue-600 border-blue-600", {
				"border-b": pathname === href,
			})}
		>
			{children}
		</Link>
	);
};
