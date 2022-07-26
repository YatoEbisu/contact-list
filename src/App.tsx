import { Container } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import PersonList from './components/PersonList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <PersonList />
      </Container>
    </Provider>
  );
}

export default App;
