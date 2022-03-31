import './styles/CardsProjects.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const CardsProjects = (props) => {
  const card = (
    <React.Fragment>
      <Link to={`/projectexpert/${props.id}`}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16 }}
            color='var(--firstColor)'
            fontFamily='var(--fontTitle)'
            gutterBottom
          >
            <h4 className='nameProject'>{props.numProject}</h4>
          </Typography>
          <div className='separation'></div>
          <Typography
            sx={{ mb: 1.5, fontSize: 14 }}
            color='var(--firstColor)'
            fontFamily='var(--fontBody)'
          >
            <div className='projectGroup'>
              <ul>
                <li>
                  <div className='projectTitle'>#Experts</div>
                  <div className='projectTitle2'>{props.quantityExpert}</div>
                </li>
                <li>
                  <div className='projectTitle'>Category</div>
                  <div className='projectTitle2'> {props.kindOfExpert}</div>
                </li>
                <li>
                  <div className='projectTitle'>Deadline</div>
                  <div className='projectTitle2'>{props.itwDeadline}</div>
                </li>
                <li>
                  <div className='projectTitle'>Industry</div>
                  <div className='projectTitle2'>{props.industry}</div>
                </li>
                <li>
                  <div className='projectTitle'>Keywords </div>
                  <div className='projectTitle2'> {props.linkedin}</div>
                </li>
              </ul>
            </div>
          </Typography>
        </CardContent>
      </Link>
    </React.Fragment>
  )
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
  )
}
export default CardsProjects
