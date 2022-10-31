import PropTypes from 'prop-types';

export function Heading({ heading, children }) {
  const Component = heading;

  return (
    <Component>
      {children}
    </Component>
  );
}

Heading.propTypes = {
  heading: PropTypes.oneOf(['h1', 'h2', 'h3']),
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  heading: 'h1',
};
