import { Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import DefaultLayout from './layout/DefaultLayout';
import MoviesPage from './pages/Home/MoviesPage';
import TVShowsPage from './pages/TVShows/TVShowsPage';
import AnimePage from './pages/Anime/AnimePage';
import PlansPage from './pages/Plans/PlansPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Register from './pages/Authentication/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/tv-shows" element={<TVShowsPage />} />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;