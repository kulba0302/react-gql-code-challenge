import React from 'react';

import { CountryCard } from '../../styles/cards';

import { KEYS_FOR_LANGUAGES_DISPLAYING } from '../../constants/language';

const getLanguagesTextInLine = (languages, key = 'name') => (languages.map((language, index) => (
    `${language[key]}${languages.length - 1 !== index ? ', ' : ''}`
)));


export const Country = ({ code, continent, currency, emoji, languages, name, native, phone }) => {
    return (
        <CountryCard>
            <div className="country-card__description-wrapper-centered">
                {
                    emoji && code && (
                        <p className="country-card__emoji-icon">{emoji} {code}</p>
                    )
                }
                {
                    name && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Name:</span> {name}
                        </p>
                    )
                }
                {
                    native && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Native name:</span> {native}
                        </p>
                    )
                }
                {
                    continent && continent.name && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Continent:</span> {continent.name}
                        </p>
                    )
                }
                {
                    currency && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Currency:</span> {currency}
                        </p>
                    )
                }
                {
                    phone && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Phone code:</span> {phone}
                        </p>
                    )
                }
                {
                    languages && languages.length && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Language names:</span> &nbsp;
                            <span>{getLanguagesTextInLine(languages, KEYS_FOR_LANGUAGES_DISPLAYING.NAME)}</span>
                        </p>
                    )
                }
                {
                    languages && languages.length && (
                        <p className="country-card__paragraph">
                            <span className="country-card__paragraph-title">Language names:</span> &nbsp;
                            <span>{getLanguagesTextInLine(languages, KEYS_FOR_LANGUAGES_DISPLAYING.NATIVE)}</span>
                        </p>
                    )
                }
            </div>
        </CountryCard>
    );
};

export default Country;
