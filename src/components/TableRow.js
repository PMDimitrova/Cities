import PropTypes from 'prop-types';

import TableCell from './TableCell';
import Stack from './Stack';

const TableRow = ({ city, variant }) => {
  const { name, area, population } = city;
  // TODO: mapper for colors -> const color = variant;
  const shouldBeHighlighted = population > 1000000;
  // TODO: alternating row color based on index

  return (
    <Stack direction="row" width="100%">
      <TableCell content={name || 'N/A'} shouldBeHighlighted={shouldBeHighlighted} />
      <TableCell content={area || 'N/A'} shouldBeHighlighted={shouldBeHighlighted} />
      <TableCell content={population || 'N/A'} shouldBeHighlighted={shouldBeHighlighted} />
    </Stack>
  );
};

export default TableRow;

TableRow.propTypes = {
  city: PropTypes.object,
  variant: PropTypes.number,
};
