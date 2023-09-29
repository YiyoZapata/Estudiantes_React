/* eslint-disable react/prop-types */

const Estudiante = ({ estudiante, borrar, setEstudiante }) => {

  const {id,DNI,nombre,apellido , telefono , correo} = estudiante;
  return (
    <tr>
    <th scope="row">{DNI}</th>
    <td>{nombre}</td>
    <td>{apellido}</td>
    <td>{correo}</td>
    <td>{telefono}</td>
    <td>
      <button type="button" className="btn btn-danger" onClick={()=> borrar(id)}>Borrar</button>
      <button type="button" className="btn btn-success"  onClick={()=> setEstudiante(estudiante)}>Editar</button>
    </td>
  </tr>
  )
}

export default Estudiante;