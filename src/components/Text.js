import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../colorMap';

const typography = {
  heading: {
    1: {
      font_size: 36,
    },
    2: {
      font_size: 22,
    },
    3: {
      font_size: 18,
    },
  },
  body: {
    1: {
      font_size: 16,
    },
    2: {
      font_size: 14,
    },
  },
};

const Text = ({
  heading,
  body,
  component,
  weight = 400, // CCS prop font-weight
  color = 'textMain',
  onHoverColor,
  text,
  children,
  id,
  textAlign,
  isOverflowingEllipsis = false,
  maxWidth, // Only string, so use 'px' as suffice
  isNotSelectable,
}) => {
  const isSuppliedTextArray = Array.isArray(text);
  const displayText = isSuppliedTextArray ? text.join('. ') : text;

  return (
    <Wrap
      $typographyType={(heading && 'heading') || 'body'}
      $typographySize={heading || body || 1}
      $weight={weight}
      $hoverColor={onHoverColor}
      $textColor={color}
      id={id}
      as={component || (heading ? `h${heading}` : undefined)}
      $textAlign={textAlign}
      $withEllipsis={isOverflowingEllipsis}
      $maxWidth={maxWidth}
      $isNotSelectable={isNotSelectable}
    >
      {children || displayText}
    </Wrap>
  );
};

export default Text;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  heading: PropTypes.number,
  body: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number]),
  component: PropTypes.oneOf(['div', 'span', 'p']),
  weight: PropTypes.oneOf([400, 500, 700, 900]),
  id: PropTypes.string,
  color: PropTypes.oneOf(['textSecondary', 'textMain', 'textTertiary']),
  textAlign: PropTypes.oneOf(['start', 'end', 'center']),
  onHoverColor: PropTypes.oneOf(['textMain', 'textSecondary']),
  isOverflowingEllipsis: PropTypes.bool,
  maxWidth: PropTypes.string,
  isNotSelectable: PropTypes.bool,
};

const Wrap = styled.div`
  font-size: ${props => typography[props.$typographyType][props.$typographySize].font_size}px;
  font-weight: ${props => props.$weight};
  max-width: ${props => props.$maxWidth};
  color: ${props => colors[props.$textColor]};
  transition: color 0.3s ease;
  text-align: ${props => props.$textAlign};
  text-overflow: ${props => (props.$withEllipsis ? 'ellipsis' : undefined)};
  overflow: ${props => (props.$withEllipsis ? 'hidden' : undefined)};
  cursor: ${props => props.$cursor};
  user-select: ${props => (props.$isNotSelectable ? 'none' : 'auto')};

  &:hover {
    color: ${props => colors[props.$hoverColor]};
  }

  a {
    font-size: inherit;
    font-weight: inherit;

    &:before,
    &:after {
      display: none;
    }
  }

  span,
  a {
    display: inline-block;
  }
`;
