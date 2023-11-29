import PropTypes from 'prop-types';

import TableCell from './TableCell';
import Stack from './Stack';

const TableRow = ({ city, variant, isLastRow }) => {
  const { name, area, population } = city;
  const shouldBeHighlighted = population > 1000000;
  const isOddCellNumber = variant % 2 === 0;

  return (
    <Stack direction="row" width="100%">
      <TableCell
        content={name || 'N/A'}
        isOddCellNumber={isOddCellNumber}
        shouldBeHighlighted={shouldBeHighlighted}
        isLastRow={isLastRow}
      />
      <TableCell
        content={area || 'N/A'}
        isOddCellNumber={isOddCellNumber}
        shouldBeHighlighted={shouldBeHighlighted}
        isLastRow={isLastRow}
      />
      <TableCell
        content={population || 'N/A'}
        isOddCellNumber={isOddCellNumber}
        shouldBeHighlighted={shouldBeHighlighted}
        isLastRow={isLastRow}
        isLastInRow
      />
    </Stack>
  );
};

export default TableRow;

TableRow.propTypes = {
  city: PropTypes.object,
  variant: PropTypes.number,
  isLastRow: PropTypes.bool,
};
