import {Flex, Spacer, Menu} from '@chakra-ui/react';
import MenuLogo from './MenuLogo';
import {useState} from 'react';

import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Flex p="2" borderBottom="1px" borderColor="grey.100">
			<MenuLogo />
			<Spacer />
			<Menu>
				<MenuToggle isOpen={open} toggle={setOpen} />
				<MenuLinks />
			</Menu>
		</Flex>
	);
};

export default Navbar;
