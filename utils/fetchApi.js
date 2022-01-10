import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

const idsSet = {};

export const fetchApi = async (url, uniqueParam = 'externalID') => {
	const {data} = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'ab0157e0f1msh353a97f82b2af4bp1cec42jsnf675245abac6',
		},
	});

	if (!Array.isArray(data?.hits)) {
		return data;
	}

	if (Object.keys(idsSet).indexOf(uniqueParam) < 0) {
		idsSet[uniqueParam] = [];
	}

	data.hits = data.hits.filter(h => Boolean(h)).filter(h => {
		const index = idsSet[uniqueParam].indexOf(h[uniqueParam]);

		if (index < 0) {
			idsSet[uniqueParam].push(h[uniqueParam]);
		}

		return index < 0;
	});

	return data;
};
