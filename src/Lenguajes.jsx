import PropTypes from 'prop-types';

export const Lenguajes = ({ title, subtitulo }) => {
  return (
    <>
      <span>
        A La programación en python, php, java, react, angular, vue, etc
      </span>
      <h1>{title} </h1>
      <h1>{subtitulo} </h1>
    </>
  );
};

Lenguajes.propTypes = {
  title: PropTypes.number.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

Lenguajes.defaultProps = {
  title: 0,
  subtitulo: 'No hay titulo',
};
