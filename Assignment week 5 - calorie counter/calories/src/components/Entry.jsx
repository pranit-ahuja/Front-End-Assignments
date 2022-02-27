import { useDispatch } from "react-redux";
import { deleteEntry, updateEntry } from "../actions/Actions";

function Entry(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEntry(props.entry.id));
  };
  const handleUpdate = () => {
    dispatch(updateEntry({item:"jnljn", calories:223},props.entry.id));
  };
  

  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <div className="">{props.entry.item}</div>
      <div className="">{props.entry.calories} kcal</div>
      {/* <button className="btn-close" onClick={handleUpdate}></button> */}
     <button className="btn-close" onClick={handleDelete}></button>
    </div>
  );
};
export default Entry;
