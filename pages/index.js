import {Flex, Box} from '@chakra-ui/react';
import {baseUrl, fetchApi} from '../utils/fetchApi';
import {Banner} from '../components/Banner';
import {Property} from '../components/Property';

export default function Home({propertiesForSale, propertiesForRent}) {
	return (
		<Box>
			<Banner
				purpose={'RENT A HOME'}
				title1="Rental Homes for"
				title2="Everyone"
				desc1="Explore Apratments, Villas, Homes"
				desc2="and more"
				buttonText="Explore Renting"
				linkName="/search?purpose=for-rent"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
			/>

			{Array.isArray(propertiesForRent) && <Flex flexWrap="wrap" justifyContent="center">
				{propertiesForRent.map(prop => <Property property={prop} key={prop.id} />)}
			</Flex>}

			<Banner
				purpose={'BUY A HOME'}
				title1="Find, Buy, &amp; Own Your"
				title2="Dream Home"
				desc1="Explore Apratments, Villas, Homes"
				desc2="and more"
				buttonText="Explore Buying"
				linkName="/search?purpose=for-sale"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
			/>

			{Array.isArray(propertiesForSale) && <Flex flexWrap="wrap" justifyContent="space-between">
				{propertiesForSale.map(prop => <Property property={prop} key={prop.id} />)}
			</Flex>}
		</Box>
	);
}

export const getStaticProps = async () => {
	const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
	const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

	return {
		props: {
			propertiesForRent: propertiesForRent?.hits,
			propertiesForSale: propertiesForSale?.hits,
		},
	};
};
