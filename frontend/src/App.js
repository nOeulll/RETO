import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AlbumPage from './pages/AlbumPage';
import AlbumPhotoListPage from './pages/AlbumPhotoListPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PhotoDetailsPage from './pages/PhotoDetailsPage';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact="true" component={MainPage} />
        <Route path="/album/:albumId" component={AlbumPhotoListPage} />
        <Route path="/album/detalis" component={PhotoDetailsPage} />
        <Route path="/album" component={AlbumPage} />
        <Route path="/photo" component={PhotoPage} />
        <Route path="/my" component={MyPage} />
      </Switch>
    </Router>
  );
}

export default App;
