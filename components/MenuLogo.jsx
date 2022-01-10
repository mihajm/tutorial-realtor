import {Box} from '@chakra-ui/react';
import Link from 'next/link';

const MenuLogo = () => (
	<Link href="/">
		<Box fontSize="3xl" color="blue.400" fontWeight="bold" cursor="pointer">
			Realtor
		</Box>
	</Link>
);

export default MenuLogo;
