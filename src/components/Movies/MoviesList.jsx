import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-bottom: 10px;
`;

const MoviesList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then((data) => {
        setMovies(data.results);
      });
    }
  }, [searchQuery]);

  return (
    <StyledUl>
      {movies.map((movie) => (
        <StyledLi key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { searchMovies } from '../api'; 

// function MoviesList({ searchQuery }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     if (searchQuery) {
//       searchMovies(searchQuery).then((data) => {
//         setMovies(data.results);
//       });
//     }
//   }, [searchQuery]);

//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default MoviesList;

