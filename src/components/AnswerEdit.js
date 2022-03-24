import '../screens/styles/PageForm.css'

import axios from 'axios'
import CreatableSelect from 'react-select/creatable'
import { faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const AnswerEdit = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [options, setOptions] = useState([])

  // my_dataOptions send predetermined datas to form
  const [answerOptions, setAnswerOptions] = useState([])
  const [itwDayOptions, setItwDayOptions] = useState([])
  const [factuOptions, setFactuOptions] = useState([])

  // my_dataSelected send predetermined datas to back
  const [answerSelected, setAnswerSelected] = useState([])
  const [itwDaySelected, setItwDaySelected] = useState([])
  const [factuSelected, setFactuSelected] = useState([])

  const [error, setError] = useState(false)

  //   State des Data du projet
  const [dataProjexperts, setDataProjexperts] = useState([])

  // ********************   DATA PROJECT ***************************

  useEffect(() => {
    const dataProjexpertsFunc = () => {
      axios.get(`http://localhost:4040/projexperts/form/${id}`).then((res) => {
        console.log(res.data)
        // récupération de l'ensemble des données pré-existantes
        setDataProjexperts(res.data)

        // données uniques champ libre
        setItwDaySelected(res.data.numProject)
        setFactuSelected(res.data.projectTitle)
        setAnswerSelected(res.data.client)
      })
    }
    dataProjexpertsFunc()
  }, [])

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = async (data) => {
    setError(false)

    let answer = null

    if (data.answer) {
      if (data.answer === 'Yes') {
        let answer = 1
      } else {
        let answer = 0
      }
    }

    let datas = {
      // champs libres donnée unique
      answer: answer,
      itwDay: data.itwDay,
      factu: data.factu,
    }

    console.log('datas', datas)
    axios
      .put(`http://localhost:4040/projexperts/${id}`, datas)
      .then(function (res) {
        navigate(`/maxiProjectExpert/${id}`)
      })
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  // ******************** DELETE PROJEXPERT *******************

  const onDelete = () => {
    axios
      .delete(`http://localhost:4040/projexperts/${id}`)
      .then(function (res) {
        navigate(`/maxiProjectExpert/${id}`)
      })
  }

  return (
    <div className='tabContainerForm '>
      <div className='pageForm' id='formAnswer'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size='xl'
          className='circle'
          onClick={() => navigate(-1)}
        />
        <form
          className='pageFormInside'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='columns'>
            <div className='columnsDiv'>
              <label htmlFor='answer'>Answer</label>
              <input
                className='inputAnswer'
                id='answer'
                name='answer'
                type='text'
                autoComplete='off'
                {...register('answer')}
                value={answerSelected}
                onChange={(e) => setAnswerSelected(e.target.value)}
              ></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwDay'>ITW Day</label>
              <input
                className='inputAnswer'
                id='itwDay'
                name='itwDay'
                type='text'
                autoComplete='off'
                {...register('itwDay')}
                value={itwDaySelected}
                onChange={(e) => setItwDaySelected(e.target.value)}
              ></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='factu'>Facturation</label>
              <input
                className='inputAnswer'
                id='factu'
                name='factu'
                type='text'
                autoComplete='off'
                {...register('factu')}
                value={factuSelected}
                onChange={(e) => setFactuSelected(e.target.value)}
              ></input>
            </div>
          </div>
        </form>
        <div className='checkOrTrashAnswer'>
          <button className='buttonAddForm' onClick={() => onSubmit()}>
            Add
          </button>
          <FontAwesomeIcon
            onClick={() => onDelete()}
            icon={faTrashCan}
            size='lg'
            className='trashCan'
          />
        </div>
      </div>
    </div>
  )
}

export default AnswerEdit
