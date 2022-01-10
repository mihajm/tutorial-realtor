import {MenuList, MenuItem} from '@chakra-ui/react';
import Link from 'next/link';
import {FcHome, FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';

const MenuLinks = () => (
	<MenuList spacing={8} align="center" justify={['center', 'space-between', 'flex-end', 'flex-end']} direction={['column', 'row', 'row', 'row']} pt={[4, 4, 0, 0]}>
		<Link href="/" passHref>
			<MenuItem icon={<FcHome />}>Home</MenuItem>
		</Link>
		<Link href="/search" passHref>
			<MenuItem icon={<BsSearch />}>Search</MenuItem>
		</Link>
		<Link href="/search?purpose=for-sale" passHref>
			<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
		</Link>
		<Link href="/search?purpose=for-rent" passHref>
			<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
		</Link>
	</MenuList>
);

export default MenuLinks;
