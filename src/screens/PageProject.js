import './styles/PageForm.css'

import CreatableSelect from 'react-select/creatable'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const PageProject = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])

  // my_dataOptions send predetermined datas to form
  const [clientOptions, setClientOptions] = useState([])
  const [practiceOptions, setPracticeOptions] = useState([])
  const [statusOptions, setStatusOptions] = useState([])

  const [eCompaniesOptions, setECompaniesOptions] = useState([])
  const [fonctionOptions, setFonctionOptions] = useState([])
  const [geoExpertiseOptions, setGeoExpertiseOptions] = useState([])
  const [industryOptions, setIndustryOptions] = useState([])
  const [jobTitleOptions, setJobTitleOptions] = useState([])
  const [kindOfExpertOptions, setKindOfExpertOptions] = useState([])
  const [languagesOptions, setLanguagesOptions] = useState([])
  const [linkedinOptions, setLinkedinOptions] = useState([])
  const [projectTypeOptions, setProjectTypeOptions] = useState([])
  const [rCompaniesOptions, setRCompaniesOptions] = useState([])
  const [serviceOptions, setServiceOptions] = useState([])
  const [yearsOfExperienceOptions, setYearsOfExperienceOptions] = useState([])

  // my_dataSelected send predetermined datas to back
  const [clientSelected, setClientSelected] = useState([])
  const [practiceSelected, setPracticeSelected] = useState([])
  const [statusSelected, setStatusSelected] = useState([])

  const [ecieSelected, setEcieSelected] = useState([])
  const [fonSelected, setFonSelected] = useState([])
  const [geoSelected, setGeoSelected] = useState([])
  const [indSelected, setIndSelected] = useState([])
  const [jobSelected, setJobSelected] = useState([])
  const [koeSelected, setKoeSelected] = useState([])
  const [langSelected, setLangSelected] = useState([])
  const [linSelected, setLinSelected] = useState([])
  const [ptSelected, setPtSelected] = useState([])
  const [rcieSelected, setRcieSelected] = useState([])
  const [seSelected, setSeSelected] = useState([])
  const [yoeSelected, setYoeSelected] = useState([])

  const [error, setError] = useState(false)
  const [optionHasChanged, setOptionHasChanged] = useState([])
  const [newOptions, setNewOptions] = useState([])

  useEffect(() => {
    const getOptions = () => {
      axios.get('http://localhost:4040/projects/form').then((res) => console.log('test bdd', res.data) || setOptions(res.data))
    }
    getOptions()
  }, [newOptions])

  useEffect(() => {
    setClientOptions(options.client)
    setPracticeOptions(options.practice)
    setStatusOptions(options.status)

    setECompaniesOptions(options.company)
    setFonctionOptions(options.fonction)
    setGeoExpertiseOptions(options.geoExpertise)
    setIndustryOptions(options.industry)
    setJobTitleOptions(options.jobTitle)
    setKindOfExpertOptions(options.kindOfExpert)
    setLanguagesOptions(options.languages)
    setLinkedinOptions(options.linkedin)
    setProjectTypeOptions(options.projectType)
    setRCompaniesOptions(options.company)
    setServiceOptions(options.service)
    setYearsOfExperienceOptions(options.expertiseLevel)
  }, [options])

  /* ******************* START FUNCTION WHEN WE CREATE OPTION **************   */

  const handleCreate = (inputValue, table, column, set, selected) => {
    console.log('inputValue', inputValue)
    for (let i = 0; i < inputValue.length; i++) {
      // If the Value is New
      if (Object.keys(inputValue[i]).includes('__isNew__')) {
        const newValue = {
          value: inputValue[i].value,
          table: table,
          column: column,
        }
        console.log('newValue', newValue)
        axios
          .post('http://localhost:4040/projects/test', newValue)
          .then((res) => console.log('datas du back', res.data) || set([...selected, res.data]))
          .catch(function (error) {
            console.log(error)
          })
        // If the Value Is in DATABASE
      } else if (!selected.includes(inputValue[i])) {
        set([...selected, inputValue[i]])
      }
    }
  }

  useEffect(() => {
    console.log('langSelected', yoeSelected)
  }, [yoeSelected])

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = (data) => {
    console.log('yoe', yoeSelected, 'st', statusSelected, 'cl', clientSelected)
    if (yoeSelected.length !== 0 && statusSelected.length !== 0 && clientSelected.length !== 0) {
      setError(false)

      const client_id = clientSelected.id
      const practice_id = practiceSelected.id
      const status_id = statusSelected.id

      let ecieDatas = []
      let fonDatas = []
      let geoDatas = []
      let indDatas = []
      let jobDatas = []
      let koeDatas = []
      let langDatas = []
      let linDatas = []
      let ptDatas = []
      let rcieDatas = []
      let seDatas = []
      let yoeDatas = []

      ecieSelected.forEach((ecie) => ecieDatas.push(ecie.id))
      fonSelected.forEach((fon) => fonDatas.push(fon.id))
      geoSelected.forEach((geo) => geoDatas.push(geo.id))
      indSelected.forEach((ind) => indDatas.push(ind.id))
      jobSelected.forEach((job) => jobDatas.push(job.id))
      koeSelected.forEach((koe) => console.log('koe test', koe) || koeDatas.push(koe.id))
      langSelected.forEach((lang) => langDatas.push(lang.id))
      linSelected.forEach((lin) => linDatas.push(lin.id))
      ptSelected.forEach((pt) => ptDatas.push(pt.id))
      rcieSelected.forEach((rcie) => rcieDatas.push(rcie.id))
      seSelected.forEach((se) => seDatas.push(se.id))
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id))

      let excludedCompany_id = { excludedCompany_id: [...ecieDatas] }
      let fonction_id = { fonction_id: [...fonDatas] }
      let geoExpertise_id = { geoExpertise_id: [...geoDatas] }
      let industry_id = { industry_id: [...indDatas] }
      let jobtitle_id = { jobtitle_id: [...jobDatas] }
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] }
      let languages_id = { languages_id: [...langDatas] }
      let linkedinKeywords_id = { linkedinKeywords_id: [...linDatas] }
      let projectType_id = { projectType_id: [...ptDatas] }
      let exampleCompany_id = { exampleCompany_id: [...ecieDatas] }
      let service_id = { service_id: [...seDatas] }
      let expertiseLevel_id = { expertiseLevel_id: [...yoeDatas] }

      let datas = {
        client_id,
        practice_id,
        status_id,
        ...data,
        ...excludedCompany_id,
        ...fonction_id,
        ...geoExpertise_id,
        ...industry_id,
        ...jobtitle_id,
        ...kindOfExpert_id,
        ...languages_id,
        ...linkedinKeywords_id,
        ...projectType_id,
        ...exampleCompany_id,
        ...service_id,
        ...expertiseLevel_id,
      }

      console.log('datas', datas)
      axios.post('http://localhost:4040/projects/', datas)

      navigate('/projects')
      console.log('lang submit', langSelected)
    } else {
      setError(true)
      console.log('Form error', yoeSelected)
      data.preventDefault()
    }
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  return (
    <div className='tabContainerForm '>
      <div className='pageForm'>
        <FontAwesomeIcon icon={faCircleXmark} size='xl' className='circle' onClick={() => navigate(-1)} />
        <form className='pageFormInside' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='columns'>
            <div id='idWrapper' className='columnsDiv'>
              <h1 id='project'>PROJECT</h1>
              <div id='projectNumber'>
                <label htmlFor='number'>N°</label>
                <input id='number' name='number' type='key' {...register('numProject')} required></input>
              </div>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='projectTitle'>Project Title</label>
              <input id='projectTitle' name='projectTitle' type='text' {...register('projectTitle')}></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='client'>Num Client</label>
              <Select options={clientOptions} className='basic-multi-select' classNamePrefix={error && !clientSelected ? 'novalidated' : 'select'} onChange={(e) => setClientSelected(e)} />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='serviceOptions'>Service</label>
              <CreatableSelect
                options={serviceOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate([e], 'service', 'serviceName', setSeSelected, seSelected)
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='totalPrice'>Total Price</label>
              <input id='totalPrice' name='totalPrice' type='number' {...register('totalPrice')}></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='status'>Status</label>
              <Select options={statusOptions} className='basic-multi-select' classNamePrefix={error && !statusSelected ? 'novalidated' : 'select'} onChange={(e) => setStatusSelected(e)} />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='projectType'>Project Type</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={projectTypeOptions}
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate(e, 'projecttype', 'projectTypeName', setPtSelected, ptSelected)
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwStart'>ITW Start</label>
              <input id='itwStart' name='itwStart' type='text' role='presentation' {...register('itwStart')}></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwDeadline'>ITW Deadline</label>
              <input id='itwDeadline' name='itwDeadline' type='text' role='presentation' {...register('itwDeadline')}></input>
            </div>
          </div>

          <div className='columns'>
            <div className='columnsDiv'>
              <label htmlFor='quantityExpert'>Quantity</label>
              <input id='quantityExpert' name='quantityExpert' type='number' {...register('quantityExpert')}></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='kindOfExpertOptions'>Type</label>
              <CreatableSelect
                options={kindOfExpertOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate([e], 'kindofexpert', 'kindOfExpertName', setKoeSelected, koeSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='practice'>Practice</label>
              <Select options={practiceOptions} isMulti className='basic-multi-select' classNamePrefix='select' onChange={(e) => setPracticeSelected(e)} />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='Industry'>Industry</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={industryOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate(e, 'industry', 'industryName', setIndSelected, indSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='rCompaniesOptions'>Companies Examples</label>
              <CreatableSelect
                options={rCompaniesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate([e], 'company', 'companyName', setRcieSelected, rcieSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='eCompaniesOptions'>Excluded Companies</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={eCompaniesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => handleCreate(e, 'company', 'companyName', setEcieSelected, ecieSelected)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='jobTitle'>Job Title</label>
              <CreatableSelect
                options={jobTitleOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate([e], 'jobtitle', 'jobTitleName', setJobSelected, jobSelected)
                }}
              />
            </div>
          </div>
          <div className='columns'>
            <div className='columnsSelect'>
              <label htmlFor='function'>Function</label>
              <CreatableSelect
                options={fonctionOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate([e], 'fonction', 'fonctionName', setFonSelected, fonSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='experience'>Years of Experience</label>
              <CreatableSelect
                options={yearsOfExperienceOptions}
                className='basic-multi-select'
                classNamePrefix={error && yoeSelected.length === 0 ? 'novalidated' : 'select'}
                onChange={(e) => {
                  handleCreate([e], 'expertiselevel', 'expertiseLevelName', setYoeSelected, yoeSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='geoExpertise'>Geo Expertise</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => {
                  handleCreate([e], 'geoexpertise', 'geoExpertiseName', setGeoSelected, geoSelected)
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='languages'>Languages</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={languagesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => handleCreate(e, 'languages', 'languagesName', setLangSelected, langSelected)}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='keywords'>Linkedin Keywords</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={linkedinOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => handleCreate(e, 'linkedinkeywords', 'linkedinKey', setLinSelected, linSelected)}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='clientComment'>Comment</label>
              <textarea id='clientComment' name='clientComment' rows='10' cols='60' role='presentation' {...register('clientComment')}></textarea>
            </div>
          </div>
          <div className='checkOrTrash'>
            <button className='buttonAddForm'> Add </button>
            <FontAwesomeIcon icon={faTrashCan} size='lg' className='trashCan' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PageProject
