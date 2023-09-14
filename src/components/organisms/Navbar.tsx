import { ActiveLink } from "../atoms/ActiveLink";

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex justify-end px-24 mx-auto text-xl mt-6">
				<li className="mx-10">
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">All</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
