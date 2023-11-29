import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text';

const TableCell = ({ content, isForHeader, shouldBeHighlighted }) => {
  return (
    <Wrap $isForHeader={isForHeader} $shouldBeHighlighted={shouldBeHighlighted}>
      <Text text={content} heading={isForHeader ? 2 : 3} color={isForHeader ? 'textSecondary' : 'textMain'} />
    </Wrap>
  );
};

export default TableCell;

TableCell.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isForHeader: PropTypes.bool,
  shouldBeHighlighted: PropTypes.bool,
};

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: ${props => (props.$isForHeader ? 'center' : 'flex-start')};
  width: 100%;
  padding-left: ${props => (props.$isForHeader ? 0 : 16)}px;
  border: 1px solid red;
`;
