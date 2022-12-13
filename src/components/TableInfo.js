
import React from 'react';
import PropTypes from 'prop-types'

let tabla = [{titulo: "Hola Mundo2", duracion: 90, rating: 5, genero: ["accion", "comedia"], premios: 2},
             {titulo: "Hola Mundo2", duracion: 180, rating: 5, genero: ["comedia"], premios: 3},
             {titulo: "Hola Mundo2", duracion: 180, rating: 5, genero: ["comedia"], premios: 3},
             {titulo: "Hola Mundo2", duracion: 180, rating: 5, genero: ["comedia"], premios: 3},
             {titulo: "Hola Mundo2", duracion: 180, rating: 5, genero: ["comedia"], premios: 3},
             {titulo: "Hola Mundo2", duracion: 90, rating: 5, genero: ["accion", "comedia"], premios: 2},
             {titulo: "Hola Mundo2", duracion: 90, rating: 5, genero: ["accion", "comedia"], premios: 2},
             {titulo: "Hola Mundo2", duracion: 90, rating: 5, genero: ["accion", "comedia"], premios: 2}, ];

function TableHead(){
    return(
    <thead class="thead-dark">
        <tr>
            <th>Título</th>
            <th>Duración</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
        </tr>
    </thead>)   

};

function TableData(props){
    let genero = props.genero.map(genre => <tr>{genre}</tr> )

    return(
        <tbody>
            <tr><th>{props.titulo}</th><th>{props.duracion}</th><th>{props.rating}</th>{genero}<th>{props.premios}</th></tr>
        </tbody>
    )
};

function TableInfo() {
    return (
        <table className= "table table-striped" style={{width: "100%",  border: "1px solid black"}}>
            
            <TableHead/>
                
                {tabla.map( tabla => <TableData titulo= {tabla.titulo} duracion={tabla.duracion} rating={tabla.rating}  genero={tabla.genero} premios={tabla.premios} />)}

            <TableHead/>
        </table>
    );
};

TableInfo.defaultProps = {
    titulo: "Hola Mundo", 
    duracion: 90, 
    rating: 5, 
    genero: ["accion", "comedia"], 
    premios: 2
};

TableInfo.propTypes = {
    titulo: PropTypes.exact([PropTypes.string, PropTypes.func.isRequired]),
    duracion: PropTypes.exact([PropTypes.string, PropTypes.func.isRequired]),
    rating: PropTypes.exact([PropTypes.string, PropTypes.func.isRequired]),
    genero: PropTypes.exact([PropTypes.array, PropTypes.func.isRequired]),
    premios: PropTypes.exact([PropTypes.string, PropTypes.func.isRequired])    
};

export default TableInfo;