import React from 'react';
import ScrumCard from "./ScrumCard";
import ScrumActionButton from "./ScrumActionButton";

const ScrumList = ({title, cards, listID }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            { cards.map(card => (
                <ScrumCard key={card.id} text={card.text} /> 
            ))}
            <ScrumActionButton listID={listID} />
        </div>
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