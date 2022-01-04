import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/Contacts/contacts-actions";

import "./Filter.scss";

export default function Filter() {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = (event) =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
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
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) =>
//     dispatch(contactsActions.changeFilter(event.target.value)),
// });

//export default connect(mapStateToProps, mapDispatchToProps)(Filter);
