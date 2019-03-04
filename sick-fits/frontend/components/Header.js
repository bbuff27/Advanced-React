import Nav from './Nav';
import Link from 'next/link';
import { StyledHeader, Logo } from './styles/HeaderStyles';

const Header = () => {
	return (
		<StyledHeader>
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>Sick Fits</a>
					</Link>
				</Logo>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<div>Cart</div>
		</StyledHeader>
	);
};

export default Header;
