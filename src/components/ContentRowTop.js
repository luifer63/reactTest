import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
//import mandal from '../assets/images/mandalorian.jpg'

function ContentRowTop() {
    return (
        <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
            
                {/*ContentRowMovies*/}
                <ContentRowMovies/>
                

                <div className="row">
                    {/* LastMovieInDb*/}
                    <LastMovieInDb/>

                    {/* GenresInDv*/}
                    <GenresInDb/>
                </div>
        </div>
    );
}
export default ContentRowTop;