import React from 'react';


function Genres(props) {
    return (
        <div className="row">
            {props.genres.map( (genres, index) => 
                <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                        <div className="card-body" key={index}>{genres}
                        </div>
                    </div>
                </div>)
                }
            </div>
    );
}
export default Genres;