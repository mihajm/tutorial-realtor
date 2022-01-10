import {useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Flex, Box, Text, Icon} from '@chakra-ui/react';

import SearchFilters from '../components/SearchFilters';

import {BsFilter} from 'react-icons/bs';
import {Property} from '../components/Property';
import noresult from '../assets/images/noresult.svg';
import {baseUrl, fetchApi} from '../utils/fetchApi';

const Search = ({properties}) => {
	const [searchFilters, setSearchFilters] = useState(false);
	const router = useRouter();

	return (
		<Box>
			<Flex
				cursor="pointer"
				bg="gray.100"
				borderBottom="1px"
				borderColor="gray.200"
				p="2"
				fontWeight="black"
				fontSize="lg"
				justifyContent="center"
				alignItems="center"
				onClick={() => setSearchFilters(prevFilters => !prevFilters)}
			>
				<Text>Search Property By Filters</Text>
				<Icon paddingLeft="2" w="7" as={BsFilter} />
			</Flex>
			{searchFilters && <SearchFilters />}
			<Text fontSize="2xl" p="4" fontWeight="bold">Properties {router.query.purpose ? router.query.purpose.replace('-', ' ') : ''}</Text>
			{Array.isArray(properties) && <Flex flexWrap="wrap" justifyContent="space-evenly">
				{properties.map(prop => <Property property={prop} key={prop.id} />)}
			</Flex>}
			{!properties.length && (
				<Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
					<Image alt="no result" src={noresult} />
					<Text marginTop="3" fontSize="2xl">No Results Found</Text>
				</Flex>
			)}
		</Box>
	);
};

export default Search;

export const getServerSideProps = async ({query}) => {
	const purpose = query.purpose || 'for-rent';
	const rentFrequency = query.rentFrequency || 'yearly';
	const minPrice = query.minPrice || '0';
	const maxPrice = query.maxPrice || '1000000';
	const roomsMin = query.roomsMin || '0';
	const bathsMin = query.bathsMin || '0';
	const sort = query.sort || 'price-desc';
	const areaMax = query.areaMax || '35000';
	const locationExternalIDs = query.locationExternalIDs || '5002';
	const categoryExternalID = query.categoryExternalID || '4';

	const properties = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

	return {
		props: {
			properties: properties?.hits,
		},
	};
};
