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
              <li>
                <div className='projectTitle'>Project Type:</div>{' '}
                <div className='projectTitle2'>{props.projectType}</div>
              </li>
              <li>
                <div className='projectTitle'>Function:</div>{' '}
                <div className='projectTitle2'>{props.fonction}</div>
              </li>
              <li>
                <div className='projectTitle'>Kind of Expert:</div>
                <div className='projectTitle2'> {props.kindOfExpert}</div>
              </li>
              <li>
                <div className='projectTitle'>Number of Expert:</div> {}
              </li>
              <li>
                <div className='projectTitle'>First Interview:</div>{' '}
                <div className='projectTitle2'>{props.itwStart}</div>
              </li>
              <li>
                <div className='projectTitle'>Deadline Interview:</div>{' '}
                <div className='projectTitle2'>{props.itwDeadline}</div>
              </li>
              <li>
                <div className='projectTitle'>Price:</div>{' '}
                <div className='projectTitle2'>{props.totalPrice}</div>
              </li>
              <li>
                <div className='projectTitle'>Keywords:</div>
                <div className='projectTitle2'> {}</div>
              </li>
            </ul>
          </p>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 800 }} className='cardProjectContainer'>
      <Card variant='outlined' className='cardProject'>
        {card}
      </Card>
    </Box>
  );
};
export default CardsProjects;
