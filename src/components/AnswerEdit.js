import axios from 'axios'
import { faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import '../screens/styles/PageForm.css'

const AnswerEdit = (props) => {
  const { register, handleSubmit } = useForm()

  // my_dataOptions send predetermined datas to form
  const [answerOptions, setAnswerOptions] = useState([])

  // my_dataSelected send predetermined datas to back
  const [answerSelected, setAnswerSelected] = useState([])
  const [itwDaySelected, setItwDaySelected] = useState([])
  const [factuSelected, setFactuSelected] = useState([])

  const [error, setError] = useState(false)

  //   State des Data du projet
  const [dataProjexperts, setDataProjexperts] = useState([])

  // ********************   DATA PROJEXPERT ***************************
  useEffect(() => {
    setAnswerOptions([
      { id: 1, value: 'Yes', label: 'Yes' },
      { id: 2, value: 'No', label: 'No' },
    ])
  }, [])

  useEffect(() => {
    const dataProjexpertsFunc = () => {
      axios
        .put(`http://localhost:4040/projexperts/form/${props.idExpert}`, {
          projects_id: props.idProject,
        })
        .then((res) => {
          console.log(res.data)
          // récupération de l'ensemble des données pré-existantes
          setDataProjexperts(res.data)

          // données uniques champ libre
          setItwDaySelected(res.data.itwDay)
          setFactuSelected(res.data.factu)

          if (res.data.answer === 1) {
            setAnswerSelected({ label: 'Yes', value: 'Yes' })
          } else if (res.data.answer === 0) {
            setAnswerSelected({ label: 'No', value: 'No' })
          }
        })
    }
    dataProjexpertsFunc()
  }, [props.idExpert])

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = async (data) => {
    setError(false)
    let answer = undefined

    if (answerSelected.id === 1) {
      answer = 1
    } else if (answerSelected.id === 2) {
      answer = 0
    }

    let datas = {
      idProject: props.idProject,
      answer: answer,
      // champs libres donnée unique
      itwDay: data.itwDay,
      factu: data.factu,
    }

    console.log('datas', datas)

    const onPut = async () => {
      await axios
        .put(`http://localhost:4040/projexperts/${props.idExpert}`, datas)
        .then(function (res) {
          props.setAnswerEdit(false)
        })
    }
    onPut()
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  // ******************** DELETE PROJEXPERT *******************

  const onDelete = async () => {
    await axios
      .put(`http://localhost:4040/projexperts/delete/${props.idExpert}`, {
        projects_id: props.idProject,
      })
      .then(function (res) {
        props.setAnswerEdit(false)
      })
    props.setIdExpert(null)
  }

  return (
    <div className='tabContainerForm'>
      <div className='pageForm' id='formAnswer'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size='xl'
          className='circle'
          onClick={() => props.setAnswerEdit(false)}
        />
        <form
          className='pageFormInside'
          id='answerForm'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div>
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

            <div>
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

            <div>
              <label htmlFor='answer'>Answer</label>
              <Select
                options={answerOptions}
                className='basic-multi-select inputAnswer'
                classNamePrefix={
                  error && !answerSelected ? 'novalidated' : 'select'
                }
                value={answerSelected}
                onChange={(e) => setAnswerSelected(e)}
              ></Select>
            </div>
          </div>
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
        </form>
      </div>
    </div>
  )
}

export default AnswerEdit
