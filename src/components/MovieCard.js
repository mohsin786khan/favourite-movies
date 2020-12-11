import React from 'react';
import { addFavourites } from '../actions.js'

class MovieCard extends React.Component{
    
    handleFavouriteClick = () => {
        const { movie, isFavourite } = this.props;
        this.props.dispatch(addFavourites(movie));
      };
    
      handleUnFavouriteClick = () =>{
         
      }
    render(){
        const { movie, isFavourite } =this.props;
        return(
            <div className="movie-card">
            <div className="left">
                <img alt="movie-poster" src={movie.Poster} /></div>
                <div className="right">
                    <div className="title">{movie.Title}  </div>
                     <div className="plot">{movie.Plot} </div>
                     <div className="footer">
                     <div className="rating">{ movie.imdbRating }</div>
                     {
                         isFavourite
                         ?  <button className="Unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</button> 
                         : <button className="favourite-btn" onClick={this.handleFavouriteClick}>favourite</button>
                          
                     }
                    
                     </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;