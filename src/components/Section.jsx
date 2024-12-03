import PropTypes from "prop-types"

export default function Section({ title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}