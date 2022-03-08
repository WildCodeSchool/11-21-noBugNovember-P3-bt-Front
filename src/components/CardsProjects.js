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
        <Typography
          sx={{ fontSize: 16 }}
          color='var(--firstColor)'
          fontFamily='var(--fontTitle)'
          gutterBottom
        >
          <h4 className='nameProject'>{props.numProject}</h4>
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 14 }}
          color='var(--firstColor)'
          fontFamily='var(--fontBody)'
        >
          <div className='projectGroup'>
            <ul>
              <li>
                <div className='projectTitle'>K.o.Exp</div>
                <div className='projectTitle2'> {props.kindOfExpert}</div>
              </li>
              <li>
                <div className='projectTitle'>Nb.o.Exp</div>
                <div className='projectTitle2'>{props.quantityExpert}</div>
              </li>
              <li>
                <div className='projectTitle'>Interview 1</div>
                <div className='projectTitle2'>{props.itwStart}</div>
              </li>
              <li>
                <div className='projectTitle'>Interview 2 </div>
                <div className='projectTitle2'>{props.itwDeadline}</div>
              </li>
              <li>
                <div className='projectTitle'>Price</div>
                <div className='projectTitle2'>{props.totalPrice}</div>
              </li>
              <li>
                <div className='projectTitle'>Keywords </div>
                <div className='projectTitle2'> {props.linkedin}</div>
              </li>
            </ul>
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box>
      <Card
        variant='outlined'
        className='cardProject'
        style={{
          backgroundColor: 'var(--cardBgColor)',
        }}
      >
        {card}
      </Card>
    </Box>
  );
};
export default CardsProjects;
