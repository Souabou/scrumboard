import React, { Component } from "react";
import ScrumList from './ScrumList';
import { connect } from "react-redux";
import ScrumActionButton from "./ScrumActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = (result) => {
    // todo: reording logic
    const { destination, source, draggableId } = result;

    if (!destination) {
     return; 
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={ this.onDragEnd}>
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
};

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
