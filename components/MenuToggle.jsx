import {MenuButton, IconButton, Box} from '@chakra-ui/react';
import {IoMdClose, IoMdMenu} from 'react-icons/io';

const MenuToggle = ({toggle, isOpen}) => (
	<Box onClick={() => toggle(!isOpen)} alignItems="center" justifyContent="center" height="100%" cursor="pointer">
		<MenuButton fontSize={24} bg="white" as={IconButton} icon={isOpen ? <IoMdClose /> : <IoMdMenu />} />
	</Box>

);

export default MenuToggle;
