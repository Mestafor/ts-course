import { connect, Dispatch } from "react-redux";
import { searchActions } from "../../actions/search-term.action";
import { Header } from "./header";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearch: (value: string) => dispatch(searchActions.onUpdateSearch(value))
})

export default connect(null, mapDispatchToProps)(Header);