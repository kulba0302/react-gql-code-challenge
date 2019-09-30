import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { COUNTRY_QUERY } from '../../queries/country';

import { NOT_FOUND_ERROR_TEXT } from '../../constants/error';

import Country from '../Country';
import Loader from '../Loader';
import Error from "../Error";

import { SpecificCoutryWrapper } from '../../styles/cards';

const SpecificCountry = (props) => {
    const { match: { params } } = props;
    const { loading, error, data } = useQuery(COUNTRY_QUERY, {
        variables : {
            code: params.code.toUpperCase()
        }
    });

    if(loading) {
        return <Loader />
    }

    if(error || !data.country) {
        console.log(<Error />);
        return <Error errorText={NOT_FOUND_ERROR_TEXT}/>;
    }

    const countryData = { ...data.country, code: params.code.toUpperCase() };

    return (
        <SpecificCoutryWrapper>
            <Country { ...countryData } />
        </SpecificCoutryWrapper>
    );
};

export default SpecificCountry;
