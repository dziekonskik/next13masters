"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";
interface ActiveLinkProps<T extends string = string> {
	children: React.ReactNode;
	href: Route<T> | UrlObject;
	exact?: boolean;
}

export const ActiveLink = <T extends string>({
	children,
	href,
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const stringPathname = typeof href === "object" ? href.pathname ?? "" : href;
	const isActive = exact ? pathname === stringPathname : pathname.includes(stringPathname);

	return (
		<Link
			href={href}
			className={clsx("text-blue-500 hover:text-blue-600 border-blue-600", {
				"border-b": isActive,
			})}
		>
			{children}
		</Link>
	);
};
