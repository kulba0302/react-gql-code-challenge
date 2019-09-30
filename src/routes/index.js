import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { COUNTRIES, COUNTRY_CODE } from "../constants/routes";

import RoutesList from "../components/RoutesList";
import CountriesList from "../components/CountriesList";
import SpecificCountry from "../components/SpecificCountry";

export default () => (
    <Switch>
        <Route exact path={`/`} component={RoutesList} />
        <Route exact path={`/${COUNTRIES}`} component={CountriesList} />
        <Route exact path={`/${COUNTRIES}/:${COUNTRY_CODE}`} component={SpecificCountry} />
    </Switch>
);
