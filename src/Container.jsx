import React from "react";
import Column from "./Column";
import MovieInfo from "./MovieInfo";

function Container() {
    return(
        <div className="container">
            <Column 
            filmId={MovieInfo[0].filmId} 
            filmName={MovieInfo[0].filmName} 
            filmTagLine={MovieInfo[0].filmTagLine}
            filmNumber={MovieInfo[0].filmNumber} 
            description={MovieInfo[0].description}
            director={MovieInfo[0].director}
            actors={MovieInfo[0].actors}
            releaseDate={MovieInfo[0].releaseDate}
            studio={MovieInfo[0].studio}
            runtime={MovieInfo[0].runtime}
            genre={MovieInfo[0].genre}
            popularity={MovieInfo[0].popularity}
            />

            <Column
            filmId={MovieInfo[1].filmId} 
            filmName={MovieInfo[1].filmName} 
            filmTagLine={MovieInfo[1].filmTagLine}
            filmNumber={MovieInfo[1].filmNumber} 
            description={MovieInfo[1].description}
            director={MovieInfo[1].director}
            actors={MovieInfo[1].actors}
            releaseDate={MovieInfo[1].releaseDate}
            studio={MovieInfo[1].studio}
            runtime={MovieInfo[1].runtime}
            genre={MovieInfo[1].genre}
            popularity={MovieInfo[1].popularity}
            />

            <Column
            filmId={MovieInfo[2].filmId} 
            filmName={MovieInfo[2].filmName} 
            filmTagLine={MovieInfo[2].filmTagLine}
            filmNumber={MovieInfo[2].filmNumber} 
            description={MovieInfo[2].description}
            director={MovieInfo[2].director}
            actors={MovieInfo[2].actors}
            releaseDate={MovieInfo[2].releaseDate}
            studio={MovieInfo[2].studio}
            runtime={MovieInfo[2].runtime}
            genre={MovieInfo[2].genre}
            popularity={MovieInfo[2].popularity}
            />
                        
            <Column
            filmId={MovieInfo[3].filmId} 
            filmName={MovieInfo[3].filmName} 
            filmTagLine={MovieInfo[3].filmTagLine}
            filmNumber={MovieInfo[3].filmNumber} 
            description={MovieInfo[3].description}
            director={MovieInfo[3].director}
            actors={MovieInfo[3].actors}
            releaseDate={MovieInfo[3].releaseDate}
            studio={MovieInfo[3].studio}
            runtime={MovieInfo[3].runtime}
            genre={MovieInfo[3].genre}
            popularity={MovieInfo[3].popularity}
            />
        </div>
    );
};

export default Container;