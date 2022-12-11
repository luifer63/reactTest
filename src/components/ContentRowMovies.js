import React from 'react';
import RowMovie from './RowMovie';
let properties = [{title: "MOVIES IN DATA BASE", cipher: 21,  borderColor: "text-primary"},
                      {title: "TOTAL AWARDS", cipher: 79, borderColor: "text-success"},
                      {title: "ACTORS QUANTITY", cipher: 49, borderColor: "text-warning"}];



function ContentRowMovies(){
    
    return (
        <div className="row">
            {properties.map( properties => <RowMovie title={properties.title} cipher={properties.cipher} borderColor={properties.borderColor} />)  }                             
        </div>
        );
}

export default ContentRowMovies;