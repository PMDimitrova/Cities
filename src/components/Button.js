import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../colorMap';

const Button = ({ text, size = 1, onClick, isDisabled, isFluid, maxWidth }) => {
  return (
    <Wrap
      $size={size}
      $isFluid={isFluid}
      $isDisabled={isDisabled}
      $maxWidth={maxWidth}
      onClick={e => !isDisabled && onClick && onClick(e)}
    >
      {text && <span>{text}</span>}
    </Wrap>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2]),
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isFluid: PropTypes.bool,
  maxWidth: PropTypes.number,
};

const Wrap = styled.div`
  display: flex;
  width: ${({ $isFluid }) => ($isFluid ? '100%' : null)};
  height: ${props => (props.$size === 1 ? 40 : 48)}px;
  max-width: ${props => props.$maxWidth}px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: ${props => (props.$isDisabled ? 'none' : 'auto')};
  font-size: ${props => (props.$size === 1 ? 20 : 24)}px;
  font-weight: 700;
  word-wrap: break-word;
  border-radius: 4px;
  background-color: ${colors.background};
  color: ${colors.accentDark};
  box-shadow: ${`0 0 0 3px ${colors.background}`};
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    background-color: ${colors.darkBackground};
  }
`;
