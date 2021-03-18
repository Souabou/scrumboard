import React from 'react';
import Card from '@material-ui/icons/Card';
import Typography from '@material-ui/icons/Typography';
import CardContent from '@material-ui/icons/CardContent';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div `
    margin-bottom: 8px;
`;

const ScrumCard = ({ text, id, index }) => {
    return (
      <Draggable draggableId={String(id)} index={index}>
          {provided => (
              <CardContainer 
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
              >
                <Card>
                    <CardContent>
                        <Typography gutterBottom>{text}</Typography>
                    </CardContent>
                </Card>
            </CardContainer>
          )}
      </Draggable>
    );
};

export default ScrumCard;