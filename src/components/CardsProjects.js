import './styles/CardsProjects.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardsProjects = (props) => {
  console.log(props);
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          <h4 className='nameProject'>{props.numProject}</h4>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <p className='Project'>
            <ul>
              <li>Expert type: {props.projectTitle}</li>
              <li>Industry: {props.totalPrice}</li>
              <li>Function: {props.status}</li>
            </ul>
          </p>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <>
      <div className='cardProjectContainer'>
        <Box sx={{ minWidth: 275 }}>
          <Card variant='outlined'>{card}</Card>
        </Box>
      </div>
    </>
  );
};
export default CardsProjects;
