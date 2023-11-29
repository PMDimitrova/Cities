import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../colorMap';
import Text from './Text';

const TableCell = ({ content, isForHeader, shouldBeHighlighted, isLastInRow, isLastRow, isOddCellNumber }) => {
  const cellColor = isOddCellNumber ? colors.background : colors.darkBackground;
  const fontColor = isForHeader ? 'textSecondary' : 'textMain';

  return (
    <Wrap
      $isForHeader={isForHeader}
      $shouldBeHighlighted={shouldBeHighlighted}
      $isLastInRow={isLastInRow}
      $isLastRow={isLastRow}
      $cellColor={shouldBeHighlighted ? colors.accentLight : cellColor}
    >
      <Text text={content} heading={isForHeader ? 2 : 3} color={shouldBeHighlighted ? 'textTertiary' : fontColor} />
    </Wrap>
  );
};

export default TableCell;

TableCell.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isForHeader: PropTypes.bool,
  shouldBeHighlighted: PropTypes.bool,
  isLastInRow: PropTypes.bool,
  isLastRow: PropTypes.bool,
  isOddCellNumber: PropTypes.bool,
};

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: ${props => (props.$isForHeader ? 'center' : 'flex-start')};
  width: 100%;
  padding-left: ${props => (props.$isForHeader ? 0 : 16)}px;
  border-left: 1px solid;
  border-top: 1px solid;
  border-right: ${props => (props.$isLastInRow ? '1px solid' : undefined)};
  border-bottom: ${props => (props.$isLastRow ? '1px solid' : undefined)};
  border-color: ${colors.border};
  background-color: ${props => props.$cellColor};
`;
