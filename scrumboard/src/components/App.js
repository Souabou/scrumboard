import React, { Component } from "react";
import ScrumList from './ScrumList';
import { connect } from "react-redux";
import ScrumActionButton from "./ScrumActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div `
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = (result) => {
    console.log(result)
    // todo: reording logic
    const { destination, source, draggableId } = result;
      console.log(result)
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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>SCRUMBOARD</h2>
          <ListContainer>
            { lists.map(list => (
              <ScrumList 
                listID={list.id} 
                key={list.id} 
                title={list.title} 
                cards={list.cards} 
              />
            ))}
            <ScrumActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
