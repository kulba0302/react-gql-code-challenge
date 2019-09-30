import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';

import { COUNTRIES_QUERY } from '../../queries/countries';

import { COUNTRIES } from "../../constants/routes";

import Country from '../Country';
import Loader from '../Loader';
import Error from '../Error';

import { CountriesListWrapper } from '../../styles/cards';

const CountriesList = () => {
    const { loading, error, data } = useQuery(COUNTRIES_QUERY);

    if(loading) {
        return <Loader />;
    }

    if(error) {
        return <Error />;
    }

    return (
        <CountriesListWrapper>
            {data.countries.map((item) => (
                <Link key={uid(item)} to={`/${COUNTRIES}/${item.code}`}>
                    <Country { ...item } />
                </Link>)
            )}
        </CountriesListWrapper>
    );
};

export default CountriesList;
