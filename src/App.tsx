import React from 'react';
import Home from 'pages/Home';
import { SWRConfig } from 'swr';
import ContainerPage from 'components/ContainerPage';
import Navigation from 'components/Navigation';

function App() {
  return (
    <ContainerPage>
      <Navigation />
      <SWRConfig value={{
        revalidateOnFocus: false,
      }}>
        <Home />
      </SWRConfig>
    </ContainerPage>
  );
}

export default App;
