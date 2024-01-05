import './App.css';
import Client from './components/Client';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
       <Client />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
