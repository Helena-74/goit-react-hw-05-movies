import React from 'react';
import MoviesList from '../Movies/MoviesList';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-bottom: 10px;
`;

const HomeContainer = styled.div`
  margin: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <StyledHeader>Home Page</StyledHeader>
      <MoviesList />
    </HomeContainer>
  );
};

export default Home;

// function Home() {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <MoviesList />
//     </div>
//   );
// }

// export default Home;
