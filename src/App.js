import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import createClient from './utils/createClient';
import Main from "./components/Main";

export default class App extends Component {

    render() {
        const { history } = this.props;

        return (
            <BrowserRouter history={history}>
                <ApolloProvider client={createClient()}>
                    <Main history={history}>
                        <Routes />
                    </Main>
                </ApolloProvider>
            </BrowserRouter>
        );
    }
}
