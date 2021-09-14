import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AlbumPage from './pages/AlbumPage';
import AlbumPhotoListPage from './pages/AlbumPhotoListPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PhotoDetailsPage from './pages/PhotoDetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact="true" component={MainPage} />
        <Route path="/album" exact="true" component={AlbumPage} />
        <Route path="/album/:albumId" component={AlbumPhotoListPage} />
        <Route path="/photo" component={PhotoDetailsPage} />
        <Route path="/my" component={MyPage} />
      </Switch>
    </Router>
  );
}

export default App;
