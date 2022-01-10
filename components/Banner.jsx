import {Flex, Box, Text, Button} from '@chakra-ui/react';
import {Link} from 'next/link';
import {Image} from 'next/Image';

export const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}) => (
	<Flex flexWrap="warp" justifyContent="center" alignItems="center" m="10">
		<Image src={imageUrl} width={500} height={300} alt="banner" referrerPolicy="no-referrer" />
		<Box marginLeft="10">
			<Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
			<Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
			<Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1}<br />{desc2}</Text>
			<Button fontSize="xl" bg="white">
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
);
