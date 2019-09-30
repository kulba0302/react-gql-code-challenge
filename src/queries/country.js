import gql from 'graphql-tag';

export const COUNTRY_QUERY = gql`
    query getCountry($code: String!) {
        country(code: $code) {
            code
            phone
            currency
            emoji
        }
    }
`;
