import React from 'react';
// import ScrumList from './ScrumList';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const ScrumCard = ({ text }) => {
    return (
      <Card style={styles.cardContainer}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>{ text }</Typography>
          </CardContent>
      </Card>
    );
};

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default ScrumCard;