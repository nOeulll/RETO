import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailsPhotoPage from './pages/DetailsPhotoPage';

function App() {
  return (
    <div>
      <Route path="/" exact="true" component={MainPage} />
      <Route path="/details-photo" component={DetailsPhotoPage} />
    </div>
  );
}

export default App;
