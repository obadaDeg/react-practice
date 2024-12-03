import PropTypes from "prop-types";

export default function Tabs({ children, buttons, ButtonsContainer = "ul" }) {
  // const ButtonContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.object.isRequired,
  buttons: PropTypes.element.isRequired,
  ButtonsContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
