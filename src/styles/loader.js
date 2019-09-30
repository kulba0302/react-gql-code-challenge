import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg);
    }
`;


export const LoaderElement = styled.div`
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: ${rotateAnimation} 2s linear infinite;
`;
