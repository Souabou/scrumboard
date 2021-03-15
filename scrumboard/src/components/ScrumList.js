import React from 'react';
import ScrumCard from "./ScrumCard"

const ScrumList = ({title}) => {
    return (
        <div style={Styles.container}>
        <h4>{title}</h4>
        <ScrumCard />
        </div>
    );
};

const Styles = {
    container: {
      backgroundColor: "#F7CA18",
      borderRadius: 3,
      width: 300,
      padding: 8
    }
}

export default ScrumList;