import {Select} from '@chakra-ui/react';

const SearchFilter = ({filter, searchProperties}) => {
	if (!filter || !Array.isArray(filter.items)) {
		return <></>;
	}

	return (
		<Select
			placeholder={filter.placeholder}
			w="fit-content"
			p="2"
			onChange={e => searchProperties({[filter.queryName]: e.target.value})}
		>
			{filter.items.map(i => <option value={i.value} key={i.value}>{i.name}</option>)}
		</Select>);
};

export default SearchFilter;
