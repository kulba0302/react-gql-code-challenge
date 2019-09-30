import styled from 'styled-components';

export const CountriesListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px 60px;
    margin: 0 auto;
`;

export const SpecificCoutryWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 270px;
`;

export const CountryCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.09) 0 12px 24px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 237, 237);
    border-image: initial;
    padding: 10px;
    min-width: 250px;
    word-break: break-word;
    height: 100%;
    
    .country-card__description-wrapper-centered {
      margin: 0 auto;
      text-align: center;
      
      .country-card__emoji-icon {
        font-size: 30px;
        margin: 0 auto;
        text-align: center;
      }
      
      .country-card__paragraph {
        .country-card__paragraph-title {
          font-weight: bold;
        }
      }
    }
`;
