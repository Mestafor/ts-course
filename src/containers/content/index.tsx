import { connect, Dispatch } from "react-redux";
import { searchActions } from "../../actions/search-term.action";
import { Content } from "./content";
import { CourseStore } from "../../store/root.store";
import { itemsActions } from "../../actions/items.action";

const mapStateToProps = (state: CourseStore) => ({
  items: state.items,
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getItems: () => dispatch(itemsActions.getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);