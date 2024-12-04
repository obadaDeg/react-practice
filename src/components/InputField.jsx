import PropTypes from "prop-types";
import { keyToID } from "../utils/constants";

export default function InputField({
  id,
  type = "number",
  title,
  handleInputValue,
  data,
}) {
  return (
    <span>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        onChange={handleInputValue}
        value={data[keyToID[id]]}
      />
    </span>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleInputValue: PropTypes.func.isRequired,
  data: PropTypes.object,
};
