import React from 'react';
import { Link } from 'react-router-dom';

import { COUNTRIES } from "../../constants/routes";

import { RoutesListWrapper } from '../../styles/routesList';

const RoutesList = () => (
    <RoutesListWrapper>
        <h1>Basic links: </h1>
        <ul>
            <li>
                <Link to={`/${COUNTRIES}`}>Countries list</Link>
            </li>
        </ul>
    </RoutesListWrapper>
);

export default RoutesList;

