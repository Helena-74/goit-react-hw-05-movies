import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:movieId" exact component={MovieDetails} />
            <Route path="/movies/:movieId/cast" exact component={Cast} />
            <Route path="/movies/:movieId/reviews" exact component={Reviews} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </AppContainer>
    </Router>
  );
};

export default App;

// const Home = lazy(() => import('./Home/Home'));
// const Movies = lazy(() => import('./Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/movies" exact component={Movies} />
//           <Route path="/movies/:movieId" exact component={MovieDetails} />
//           <Route path="/movies/:movieId/cast" exact component={Cast} />
//           <Route path="/movies/:movieId/reviews" exact component={Reviews} />
//           <Redirect to="/" />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
