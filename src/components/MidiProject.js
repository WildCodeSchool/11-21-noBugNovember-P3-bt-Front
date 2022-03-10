import * as React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles/Midi.css'

const MidiProject = () => {
  const [project, setProject] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:4040/projects/midicard/${id}`)
      .then((response) => {
        setProject(response.data[0])
      })
  }, [])

  console.log(project)

  const card = (
    <React.Fragment className='midiProjectContainer'>
      <CardContent>
        <Typography
          color='var(--firstColor)'
          fontFamily='var(--fontTitle)'
          gutterBottom
        >
          <div className='midiCardHeader'>
            <h4 className={!project.status && 'hidden'}>{project.status}</h4>
            <h4 className={!project.projectTitle && 'hidden'}>
              {project.projectTitle}
            </h4>
            <h4 className={!project.numProject && 'hidden'}>
              {project.numProject}
            </h4>
          </div>
        </Typography>
        <div id='headerMidiCardBorder'></div>
        <Typography color='var(--firstColor)' fontFamily='var(--fontBody)'>
          <div className='projectGroupMidi'>
            <ul>
              <li>
                <div
                  className={
                    project.quantityExpert
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  Number of experts
                </div>
                <div
                  className={
                    project.quantityExpert
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.quantityExpert}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.kindOfExpert ? 'projectFieldName' : 'hidden'
                  }
                >
                  Type of experts
                </div>
                <div
                  className={
                    project.kindOfExpert ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.kindOfExpert}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.totalPrice
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  Total Price
                </div>
                <div
                  className={
                    project.totalPrice
                      ? 'projectFieldContent  background2'
                      : 'hidden'
                  }
                >
                  {project.totalPrice}
                </div>
              </li>
              <li>
                <div
                  className={project.itwStart ? 'projectFieldName' : 'hidden'}
                >
                  ITW Start
                </div>
                <div
                  className={
                    project.itwStart ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.itwStart}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.itwDeadline
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  ITW Deadline
                </div>
                <div
                  className={
                    project.itwDeadline
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.itwDeadline}
                </div>
              </li>
              <li>
                <div
                  className={project.industry ? 'projectFieldName' : 'hidden'}
                >
                  Industry
                </div>
                <div
                  className={
                    project.industry ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.industry}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.jobTitle ? 'projectFieldName background2' : 'hidden'
                  }
                >
                  Job Title
                </div>
                <div
                  className={
                    project.jobTitle
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.jobTitle}
                </div>
              </li>
              <li>
                <div
                  className={project.fonction ? 'projectFieldName' : 'hidden'}
                >
                  Function
                </div>
                <div
                  className={
                    project.fonction ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.fonction}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.expertiseLevelName
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  Years of Exp
                </div>
                <div
                  className={
                    project.expertiseLevelName
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.expertiseLevelName}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.recommend_company ? 'projectFieldName ' : 'hidden'
                  }
                >
                  Companies Examples
                </div>
                <div
                  className={
                    project.recommend_company
                      ? 'projectFieldContent '
                      : 'hidden'
                  }
                >
                  {project.recommend_company}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.exclude_company
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  Excluded Companies
                </div>
                <div
                  className={
                    project.exclude_company
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.exclude_company}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.geoExpertise ? 'projectFieldName' : 'hidden'
                  }
                >
                  Geo Expertise
                </div>
                <div
                  className={
                    project.geoExpertise ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.geoExpertise}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.languages
                      ? 'projectFieldName background2'
                      : 'hidden'
                  }
                >
                  Languages
                </div>
                <div
                  className={
                    project.languages
                      ? 'projectFieldContent background2'
                      : 'hidden'
                  }
                >
                  {project.languages}
                </div>
              </li>
              <li>
                <div
                  className={project.linkedin ? 'projectFieldName' : 'hidden'}
                >
                  Linkedin Keywords
                </div>
                <div
                  className={
                    project.linkedin ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.linkedin}
                </div>
              </li>
            </ul>
          </div>
          <div className='buttonMidiProjectContainer'>
            <button className='buttonMidiProject'>
              Voir toutes les informations
            </button>
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  )

  return (
    <Box className='midiProjectContainer'>
      <Card
        variant='outlined'
        className='midiCardProject'
        style={{
          width: '600px',
          backgroundColor: 'var(--cardBgColor)',
        }}
      >
        {card}
      </Card>
    </Box>
  )
}

export default MidiProject
