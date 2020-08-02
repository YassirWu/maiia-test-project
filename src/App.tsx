import React from 'react';
import Home from 'pages/Home';
import { SWRConfig } from 'swr';
import ContainerPage from 'components/ContainerPage';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ContainerPage>
        <SWRConfig value={{
          revalidateOnFocus: false,
        }}>
          <Home />
        </SWRConfig>
      </ContainerPage>
    </Provider>
  );
}

export default App;
