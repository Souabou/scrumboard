import React from 'react';
import ScrumCard from "./ScrumCard";
import ScrumActionButton from "./ScrumActionButton";
import { Droppable } from "react-beautiful-dnd";

const ScrumList = ({title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided=>(
                <div {...provided.droppableProps}
                ref={provided.innerRef}
                    style={styles.container}>
                    <h4>{title}</h4>
                    {cards.map(card => (
                        <ScrumCard key={card.id} text={card.text} id={card.id} /> 
                    ))}
                    <ScrumActionButton listID={listID} />
                    {provided.placeholder}

                </div>
            )}
        </Droppable>
    );
};

const styles = {
    container: {
      backgroundColor: "#dfe3e6",
      borderRadius: 3,
      width: 300,
      padding: 8,
      "height": "100%",
      marginRight: 8
    }
}

export default ScrumList;