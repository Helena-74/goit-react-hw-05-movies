import React from 'react';
import MoviesList from '../../components/Movies/MoviesList';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// const StyledLink = styled(Link)`
//   color: #007bff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const StyledUl = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const StyledLi = styled.li`
//   margin-bottom: 10px;
// `;

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


