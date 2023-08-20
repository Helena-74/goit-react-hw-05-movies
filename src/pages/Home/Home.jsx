import React from 'react';
import MoviesList from '../../components/Movies/MoviesList';
import Home from '../Home/Home.styled'
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      if (searchQuery) {
        searchMovies(searchQuery).then((data) => {
          setMovies(data.results);
        });
      }
    }, [searchQuery]);
  
  }
  return (
    <HomeContainer>
      <StyledHeader>Home Page</StyledHeader>
      <MoviesList />
    </HomeContainer>
  );


export default Home;


