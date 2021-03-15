import React from 'react';
// import ScrumList from './ScrumList';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const ScrumCard = () => {
    return (
        <Card>
         <Typography 
            color="textSecondary" 
            gutterBottom
        >
         First task of the Day
        </Typography>
      </Card>
    )
}

export default ScrumCard;