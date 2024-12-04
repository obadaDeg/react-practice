import PropTypes from "prop-types";
import InputField from "./InputField";

export default function UserInput({ handleInputValue, data }) {
  return (
    <section id="user-input">
      <fieldset className="input-group">
        <InputField
          id={"initial-investment"}
          title="Initial Investment"
          handleInputValue={handleInputValue}
          data={data}
        />
        <InputField
          id={"annual-investment"}
          title="Annual Investment"
          handleInputValue={handleInputValue}
          data={data}
        />
      </fieldset>
      <fieldset className="input-group">
        <InputField
          id={"expected-return"}
          title="Expected Return"
          handleInputValue={handleInputValue}
          data={data}
        />
        <InputField
          id={"duration"}
          title="Duration"
          handleInputValue={handleInputValue}
          data={data}
        />
      </fieldset>
    </section>
  );
}

UserInput.propTypes = {
  handleInputValue: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
