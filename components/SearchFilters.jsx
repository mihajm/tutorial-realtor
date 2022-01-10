import {useState, useEffect} from 'react';
import {Flex, Box} from '@chakra-ui/react';
import {useRouter} from 'next/router';

import {filterData, getFilterValues} from '../utils/filterData';

import SearchFilter from './SearchFilter';

const SearchFilters = () => {
	const [filters, setFilters] = useState(filterData);
	const router = useRouter();

	useEffect(() => {
		setFilters(filterData);
	}, []);

	const searchProperties = filterValues => {
		const {pathname, query} = router;

		const values = getFilterValues(filterValues);

		values.forEach(item => {
			if (filterValues?.[item.name] && item.value) {
				query[item.name] = item.value;
			} else if (query[item.name] && query[item.name] !== '') {
				delete query[item.name];
			}
		});

		router.push({pathname, query});
	};

	return (
		<Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
			{Array.isArray(filters) && filters.map(f => (
				<Box key={f.queryName}>
					<SearchFilter filter={f} searchProperties={searchProperties} />
				</Box>
			))}
		</Flex>
	);
};

export default SearchFilters;
