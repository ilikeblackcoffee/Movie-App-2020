import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

 class App extends React.Component{
   state = {
     isLoading: true,
     movies : []
   };

   getMovies = async() => {
    const {data :{ data: {movies}}} 
    = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState( { movies, isLoading : false })
  };

   componentDidMount(){
    this.getMovies();
   }

   render(){
    const { isLoading, movies } = this.state;
   return <section className="container">
    {isLoading ? (
   <div className="loader">
   <span className="loader__text">Loading...</span>
 </div>
) : (<div className="movies">
{movies.map(movie => (
  <Movie
    key={movie.id}
    id={movie.id}
    year={movie.year}
    title={movie.title}
    summary={movie.summary}
    poster={movie.medium_cover_image}
    genres={movie.genres}
  />
))}
</div>
)}
</section>
      
   }
   }
   

export default App;

// state 안에는 바꾸고 싶은 데이터를 넣는다
// setState를 호출하면 react는 새로운 state 와 함께 render function도 다시 호출함 
/* current 를 통해 this.state.count 대신 {count :current.count +1}
로 간단히 바꿀 수 있음

render ->mount -> didupdate -> unmount
map 메서드는 배열의 모든 원소에 효과 추가

*/


