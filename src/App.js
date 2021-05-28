import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import SearchScreen from './SearchScreen'

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <SearchScreen />
    </div>
  );
}

export default App;
