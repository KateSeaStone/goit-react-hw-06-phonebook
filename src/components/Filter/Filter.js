import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/Contacts/contacts-actions";

import "./Filter.scss";

const Filter = ({ value, onChange }) => (
  <label className="label__name">
    Find contact by name
    <input
      className="input__form"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
