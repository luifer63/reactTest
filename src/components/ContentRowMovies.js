import React from 'react';
import RowMovie from './RowMovie';
let properties = [{title: "MOVIES IN DATA BASE", cipher: 21,  borderColor: "primary" , icono:"fa-film"},
                      {title: "TOTAL AWARDS", cipher: 79, borderColor: "success" , icono:"fa-award"},
                      {title: "ACTORS QUANTITY", cipher: 49, borderColor: "warning" , icono:"fa-user"}];

                      //title={properties.title} cipher={properties.cipher} borderColor={properties.borderColor} icon={properties.icon}

function ContentRowMovies(){
    
    return (
        <div className="row">
            {properties.map( properties => <RowMovie {...properties} />)  }                             
        </div>
        );
}

export default ContentRowMovies;