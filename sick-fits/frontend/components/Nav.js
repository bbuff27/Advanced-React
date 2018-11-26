import Link from 'next/link';

const Nav = () => {
	return (
		<div>
			<Link href="/sell">
				<a href="">Sell</a>
			</Link>
			<Link href="/">
				<a href="">Home</a>
			</Link>
		</div>
	);
};

export default Nav;
