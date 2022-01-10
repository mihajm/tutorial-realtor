import {useContext} from 'react';
import Image from 'next/image';
import {Box, Icon, Flex} from '@chakra-ui/react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const LeftArrow = () => {
	const {scrollPrev} = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon as={FaArrowAltCircleLeft} onClick={() => scrollPrev()} cursor="pointer" fontSize="2xl" />
		</Flex>
	);
};

const RightArrow = () => {
	const {scrollNext} = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon as={FaArrowAltCircleRight} onClick={() => scrollNext()} cursor="pointer" fontSize="2xl" />
		</Flex>
	);
};

const ImageScrollBar = ({data}) => {
	if (!Array.isArray(data)) {
		return (<></>);
	}

	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
			{data.map(image => (
				<Box width="910px" itemId={image.id} overflow="hidden" key={image.id} p="1">
					<Image unoptimized alt="property" placeholder="blur" blurDataURL={image.url} src={image.url} width={1000} height={500} sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px" />
				</Box>
			))}
		</ScrollMenu>
	);
};

export default ImageScrollBar;
