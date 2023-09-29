/* eslint-disable react/prop-types */
const Error = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
        <strong>Error:</strong>
        {props.mensaje}
    </div>
  );
};

export default Error;
