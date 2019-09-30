import React from 'react';

import { DEFAULT_ERROR_TEXT } from '../../constants/error';

import { ErrorElement } from '../../styles/error';

const Error = ({ errorText = DEFAULT_ERROR_TEXT }) => (<ErrorElement>{errorText}</ErrorElement>);

export default Error;
