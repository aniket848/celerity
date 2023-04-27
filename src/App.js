import './App.css';
import SearchForm from './component/search';
import Listing from './component/listing';
import Booking from './component/booking';
import Divider from './component/divider';

function App() {
  return (
    <div className="App">
          {/* <Top/> */}
          <SearchForm/>
          <Divider/>
          <Listing/>
          <Divider/>
          <Booking/>
          <Divider/>
    </div>
  );
}

export default App;
