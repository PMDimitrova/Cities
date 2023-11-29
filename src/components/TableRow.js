import PropTypes from 'prop-types';

const TableRow = ({ city, variant }) => {
  const color = variant; // TODO: mapper for colors
  const shouldHighlightRow = false; // TODO: highlighted if population > 1mil
  // TODO: alternating row color based on index

  return (
    <>
      {color}
      {shouldHighlightRow && <> HIGHLIGHT row</>}
      <div>name : {city.name}</div>
      <div>area : {city.area}</div>
      <div>population : {city.population}</div>
    </>
  );
};

export default TableRow;

TableRow.propTypes = {
  city: PropTypes.object,
  variant: PropTypes.number,
};
