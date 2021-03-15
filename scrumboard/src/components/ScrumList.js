import React from 'react';
import ScrumCard from "./ScrumCard"

const ScrumList = ({title, cards}) => {
    return (
        <div style={Styles.container}>
            <h4>{title}</h4>
            { cards.map(card => <ScrumCard text={card.text} /> )}
        </div>
    );
};

const Styles = {
    container: {
      backgroundColor: "#dfe3e6",
      borderRadius: 3,
      width: 300,
      padding: 8,
      marginRight: 8
    }
}

export default ScrumList;