import React, { Component } from "react";
import ScrumList from './ScrumList';
import { connect } from "react-redux";
import ScrumActionButton from "./ScrumActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>SCRUMBOARD</h2>
        <div style={styles.listsContainer}>
          { lists.map(list => (
            <ScrumList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ScrumActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
    
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
