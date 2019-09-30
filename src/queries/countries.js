import gql from 'graphql-tag';

export const COUNTRIES_QUERY = gql`
   {
      countries {
         code
         name
         native
         continent {
            code
            name
         }
         languages {
            code
            name
            native
            rtl
         }
         emoji
         emojiU
      }
   }
`;
