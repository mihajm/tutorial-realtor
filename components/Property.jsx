import Link from 'next/Link';
import Image from 'next/Image';
import {Flex, Box, Text, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.jpg';

export const Property = ({property: {externalID, title, coverPhoto, price, rentFrequency, rooms, baths, area, agency, isVerified}}) => (
	<Link href={`/property/${externalID}`} passHref>
		<Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
			<Box>
				<Image unoptimized src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={400} height={260} />
			</Box>
			<Box w="full">
				<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
					<Flex alignItems="center">
						<Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
						<Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
					</Flex>
					{agency?.logo?.url && <Box>
						<Avatar unoptimized size="sm" src={agency.logo.url} />
					</Box>}
				</Flex>
				<Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
					{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
				</Flex>
				<Text fontSize="lg">
					{title.length > 30 ? `${title.substring(0, 30)}...` : title}
				</Text>
			</Box>
		</Flex>
	</Link>
);
