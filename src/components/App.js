import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies} from '../actions.js';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make api
    // dispatch action

     store.dispatch(addMovies(data));
    console.log('STATE WITH DATA',this.props.store.getState());        
  }

  
  isMovieFavourites = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  render () {  
  const {list} = this.props.store.getState();   // {List:[] , favourites:[]}
  console.log('RENDER', this.props.store.getState());
  return (
    <div className="App">
     <Navbar/>

     <div className="main">
       <div className="tabs">
         <div className="tab">Movies</div>
       <div className="tab">Favourites</div>
     </div>
     <div className="list">
      {list.map((movie,index)=>(
        <MovieCard 
        movie={movie} 
        key={`movies-${index}`}
        dispatch={this.props.store.dispatch}
        isFavourite={this.isMovieFavourites(movie)}
        />
      ))}
      
     </div>
    </div>
    </div>
  );
}
}

export default App;
