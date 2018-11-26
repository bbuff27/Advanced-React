import Link from "next/link";

const Home = props => (
	<React.Fragment>
		<p>Home</p>
		<Link href="/sell">
			<a>Sell</a>
		</Link>
	</React.Fragment>
);

export default Home;
