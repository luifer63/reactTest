
import React from 'react';
import PropTypes from 'prop-types'

let tabla = [{titulo: "Hola Mundo2", duracion: 90, rating: 5, genero: ["accion", "comedia"], premios: 2},
             {titulo: "Hola Mundo2", duracion: 180, rating: 5, genero: ["comedia"], premios: 3} ];

function TableHead(){
    return(<tr>
        <td>Título</td>
        <td>Duración</td>
        <td>Rating</td>
        <td>Genero</td>
        <td>Premios</td>
</tr>)   

};

function TableData(props){
    return(
        <tr><td>{props.titulo}</td><td>{props.duracion}</td><td>{props.rating}</td><td>{props.genero}</td><td>{props.premios}</td></tr>
    )
};

function TableInfo() {
    return (
        <table style={{width: "100%",  border: "1px solid black"}}>
            
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