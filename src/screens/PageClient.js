import './styles/PageClient.css'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const PageClient = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [options, setOptions] = useState([])
  const [projectsOptions, setProjectsOptions] = useState([])
  const [functionsOptions, setFunctionsOptions] = useState([])
  // const [countryOptions, setCountryOptions] = useState([])
  const [favcOptions, setFavcOptions] = useState([]) // Favc = Favorite Contact
  const [kobOptions, setKobOptions] = useState([]) // Kob = Kind Of Business
  const [dsOptions, setDsOptions] = useState([]) // Ds = Desired Serviced
  const [selectedOptions, setSelectedOptions] = useState([])
  const [projectsSelected, setProjectsSelected] = useState([])
  const [functionsSelected, setFunctionsSelected] = useState([])
  const [favcSelected, setFavcSelected] = useState([]) // Favc = Favorite Contact
  const [kobSelected, setKobSelected] = useState([]) // Kob = Kind Of Business
  const [dsSelected, setDsSelected] = useState([]) // Ds = Desired Serviced

  useEffect(() => {
    const getOptions = () => {
      axios
        .get('http://localhost:4040/clients/form')
        .then(
          (res) => console.log('res.data', res.data) || setOptions(res.data)
        )
    }
    getOptions()
  }, [])

  useEffect(() => {
    setProjectsOptions(options.projects)
    setFunctionsOptions(options.functions)
    setFavcOptions(options.favc)
    setKobOptions(options.kob)
    setDsOptions(options.ds)
  }, [options])
  console.log('recup', projectsOptions)
  const onSubmit = (data) => {
    let projectsDatas = []
    let functionsDatas = []
    let favoriteCDatas = []
    let kindOfBDatas = []
    let desiDatas = []

    projectsSelected.forEach((projects) => projectsDatas.push(projects.id))
    functionsSelected.forEach((functions) => functionsDatas.push(functions.id))
    favcSelected.forEach((favc) => favoriteCDatas.push(favc.id))
    kobSelected.forEach((kob) => kindOfBDatas.push(kob.id))
    dsSelected.forEach((ds) => desiDatas.push(ds.id))

    let projects = { projects: [...projectsDatas] }
    let functions = { functions: [...functionsDatas] }
    let favc = { favc: [...favoriteCDatas] }
    let kob = { kob: [...kindOfBDatas] }
    let ds = { ds: [...desiDatas] }

    let datas = { ...data, ...projects, ...functions, ...favc, ...kob, ...ds }

    console.log('datas', datas)
    axios.post('http://localhost:4040/clients/test', datas)
  }
  return (
    <div className='tabContainerClient'>
      {' '}
      <div className='pageClient'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size='xl'
          className='circle'
          onClick={() => navigate(-1)}
        />
        <form
          className='pageClientForm'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='columns'>
            <div id='idWrapper' className='columnsDiv'>
              <h1 id='client'>CLIENT</h1>
              <div id='clientNumber'>
                <label for='number'>N°</label>
                <input
                  id='number'
                  name='number'
                  type='key'
                  {...register('numExpert')}
                ></input>
              </div>
            </div>
            <div className='columnsDiv'>
              <label for='firstName'>FirstName</label>
              <input
                id='firstName'
                name='firstName'
                type='text'
                autocomplete='off'
                {...register('firstname')}
              ></input>
            </div>
            <div className='columnsDiv'>
              <label for='lastName'>LastName</label>
              <input
                autocomplete='off'
                id='lastName'
                name='lastName'
                type='text'
                {...register('lastName')}
              ></input>
            </div>
            <div className='columnsDiv'>
              <label for='phone'>Phone</label>
              <input
                id='phone'
                name='phone'
                type='tell'
                role='presentation'
                autoComplete='off'
                {...register('phone')}
              ></input>
            </div>
            <div className='columnsDiv'>
              <label for='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                role='presentation'
                {...register('email')}
              ></input>

              <div className='columnsDiv'>
                <label for='projects'>Country</label>
                <input
                  id='country'
                  name='country'
                  type='text'
                  role='presentation'
                  {...register('country')}
                ></input>
              </div>
              <div className='columnsDiv'>
                <label for='projects'>City</label>
                <input
                  id='city'
                  name='city'
                  type='text'
                  role='presentation'
                  {...register('city')}
                ></input>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='columnsDiv'>
              <label for='projects'>Business Name</label>
              <input
                id='Business Name'
                name='Business Name'
                type='text'
                role='presentation'
                {...register('Business Name')}
              ></input>
            </div>
            <div className='columnsSelect'>
              <label for='kindOfExpertOptions'>Projects</label>
              <Select
                closeMenuOnSelect={false}
                options={projectsOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => setProjectsSelected(e)}
              />
            </div>
            <div className='columnsSelect'>
              <label for='geoExpertise'>Function</label>
              <Select
                closeMenuOnSelect={false}
                options={functionsOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => setFunctionsSelected(e)}
              />
            </div>
            <div className='columnsSelect'>
              <label for='geoExpertise'>Favorite Contact</label>
              <Select
                closeMenuOnSelect={false}
                options={favcOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => setFavcSelected(e)}
              />
            </div>
            <div className='columnsSelect'>
              <label for='geoExpertise'>Kind Of Business</label>
              <Select
                closeMenuOnSelect={false}
                options={kobOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => setKobSelected(e)}
              />
            </div>
            <div className='columnsSelect'>
              <label for='geoExpertise'>Desired Serviced</label>
              <Select
                closeMenuOnSelect={false}
                options={dsOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => setDsSelected(e)}
              />
            </div>
          </div>
          <div className='checkOrTrash'>
            <button> Add </button>
            <FontAwesomeIcon icon={faTrashCan} size='lg' className='trashCan' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default PageClient
