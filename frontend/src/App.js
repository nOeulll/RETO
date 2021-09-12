import { Route } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div>
      <Route path="/" exact="true" component={MainPage} />
      <Route path="/album" component={AlbumPage} />
      <Route path="/photo" component={PhotoPage} />
      <Route path="/my" component={MyPage} />
    </div>
  );
}

export default App;
