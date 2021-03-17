import React, { Component } from "react";
import ScrumList from './ScrumList';
import { connect } from "react-redux";
import ScrumActionButton from "./ScrumActionButton";
import { DragDropContext } from "react-beautiful-dnd"

class App extends Component {

  onDragEndnd = () => {
    // todo: reording logic
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEndnd={ this.onDragEndnd}>
      <div className="App">
        <h2>SCRUMBOARD</h2>
        <div style={styles.listsContainer}>
          { lists.map(list => (
            <ScrumList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ScrumActionButton list />
        </div>
      </div>
      </DragDropContext>
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
