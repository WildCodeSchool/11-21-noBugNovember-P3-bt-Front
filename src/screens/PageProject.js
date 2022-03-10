import './styles/PageProject.css'

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
  const [languagesOptions, setLanguagesOptions] = useState([])
  const [geoExpertiseOptions, setGeoExpertiseOptions] = useState([])
  const [kindOfExpertOptions, setKindOfExpertOptions] = useState([])
  const [yearsOfExperienceOptions, setYearsOfExperienceOptions] = useState([])
  const [practiceOptions, setPracticeOptions] = useState([])
  const [jobTitleOptions, setJobTitleOptions] = useState([])
  const [industryOptions, setIndustryOptions] = useState([])
  const [projectTypeOptions, setProjectTypeOptions] = useState([])
  const [fonctionOptions, setFonctionOptions] = useState([])
  const [linkedinOptions, setLinkedinOptions] = useState([])
  const [statusOptions, setStatusOptions] = useState([])
  const [rCompaniesOptions, setRCompaniesOptions] = useState([])
  const [eCompaniesOptions, setECompaniesOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [geoSelected, setGeoSelected] = useState([])
  const [langSelected, setLangSelected] = useState([])
  const [practiceSelected, setPracticeSelected] = useState([])
  const [jobSelected, setJobSelected] = useState([])
  const [koeSelected, setKoeSelected] = useState([])
  const [yoeSelected, setYoeSelected] = useState([])
  const [rcieSelected, setRcieSelected] = useState([])
  const [ecieSelected, setEcieSelected] = useState([])
  const [ctcSelected, setCtcSelected] = useState([])
  const [pjtSelected, setPjtSelected] = useState([])
  const [error, setError] = useState(false)

  const [optionHasChanged, setOptionHasChanged] = useState([])
  const [newOptions, setNewOptions] = useState([])

  useEffect(() => {
    const getOptions = () => {
      axios
        .get('http://localhost:4040/projects/form')
        .then(
          (res) => console.log('test bdd', res.data) || setOptions(res.data)
        )
    }
    getOptions()
  }, [newOptions])

  useEffect(() => {
    setLanguagesOptions(options.languages)
    setGeoExpertiseOptions(options.geoExpertise)
    setKindOfExpertOptions(options.kindOfExpert)
    setYearsOfExperienceOptions(options.expertiseLevel)
    setPracticeOptions(options.practice)
    setJobTitleOptions(options.jobTitle)
    setIndustryOptions(options.industry)
    setProjectTypeOptions(options.projectType)
    setFonctionOptions(options.fonction)
    setLinkedinOptions(options.linkedin)
    setStatusOptions(options.status)
    setRCompaniesOptions(options.companies)
    setECompaniesOptions(options.companies)
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
          .then(
            (res) =>
              console.log('datas du back', res.data) ||
              set([...selected, res.data])
          )
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
    console.log(
      'yoe',
      yoeSelected,
      'rcie',
      rcieSelected,
      'job',
      jobSelected,
      'pr',
      practiceSelected,
      'koe',
      koeSelected
    )
    if (
      yoeSelected.length !== 0 &&
      rcieSelected.length !== 0 &&
      jobSelected.length !== 0 &&
      practiceSelected &&
      koeSelected.length !== 0
    ) {
      setError(false)

      let geoDatas = []
      let langDatas = []
      let ecieDatas = []
      let ctcDatas = []
      let pjtDatas = []
      let rcieDatas = []
      let koeDatas = []
      let yoeDatas = []
      let jobDatas = []
      const practice_id = practiceSelected.id

      geoSelected.forEach((geo) => geoDatas.push(geo.id))
      langSelected.forEach((lang) => langDatas.push(lang.id))
      ecieSelected.forEach((ecie) => ecieDatas.push(ecie.id))
      ctcSelected.forEach((ctc) => ctcDatas.push(ctc.id))
      pjtSelected.forEach((pjt) => pjtDatas.push(pjt.id))
      rcieSelected.forEach((rcie) => rcieDatas.push(rcie.id))
      koeSelected.forEach(
        (koe) => console.log('koe test', koe) || koeDatas.push(koe.id)
      )
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id))
      jobSelected.forEach((job) => jobDatas.push(job.id))

      let geoExpertise_id = { geoExpertise_id: [...geoDatas] }
      let languages_id = { languages_id: [...langDatas] }
      let excludedCompany_id = { excludedCompany_id: [...ecieDatas] }
      let exampleCompany_id = { exampleCompany_id: [...ecieDatas] }
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] }
      let expertiseLevel_id = { expertiseLevel_id: [...yoeDatas] }
      let jobtitle_id = { jobtitle_id: [...jobDatas] }

      let datas = {
        ...data,
        ...geoExpertise_id,
        ...languages_id,
        ...jobtitle_id,
        ...kindOfExpert_id,
        practice_id,
        ...excludedCompany_id,
        ...exampleCompany_id,
        ...expertiseLevel_id,
      }

      console.log('datas', datas)
      axios.post('http://localhost:4040/projects/', datas)

      navigate('/experts')
      console.log('lang submit', langSelected)
    } else {
      setError(true)
      console.log('Form error', yoeSelected)
      data.preventDefault()
    }
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  return (
    <div className='tabContainerProject '>
      <div className='pageProject'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size='xl'
          className='circle'
          onClick={() => navigate(-1)}
        />
        <form
          className='pageProjectForm'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='columns'>
            <div id='idWrapper' className='columnsDiv'>
              <h1 id='expert'>PROJECT</h1>
              <div id='expertNumber'>
                <label htmlFor='number'>N°</label>
                <input
                  id='number'
                  name='number'
                  type='key'
                  {...register('numExpert')}
                  required
                ></input>
              </div>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='projectTitle'>Project Title</label>
              <input
                id='projectTitle'
                name='projectTitle'
                type='number'
                role='presentation'
                {...register('cost')}
              ></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='totalPrice'>Total Price</label>
              <input
                id='totalPrice'
                name='totalPrice'
                type='tel'
                role='presentation'
                autocomplete='off'
                {...register('phone')}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='status'>Status</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={statusOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate(
                    e,
                    'status',
                    'status',
                    setCtcSelected,
                    ctcSelected
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='projectType'>Project Type</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={projectTypeOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  handleCreate(
                    e,
                    'projecttype',
                    'projectTypeName',
                    setCtcSelected,
                    ctcSelected
                  )
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwStart'>ITW Start</label>
              <input
                id='itwStart'
                name='itwStart'
                type='type'
                role='presentation'
                {...register('email')}
              ></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwDeadline'>ITW Deadline</label>
              <input
                id='itwDeadline'
                name='itwDeadline'
                type='url'
                role='presentation'
                {...register('linkedinProfile')}
              ></input>
            </div>
          </div>

          <div className='columns'>
            <div className='columnsDiv'>
              <label htmlFor='quantity'>Quantity</label>
              <input
                id='quantity'
                name='quantity'
                type='text'
                autocomplete='off'
                {...register('firstname')}
                required
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='kindOfExpertOptions'>Type</label>
              <CreatableSelect
                options={kindOfExpertOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && koeSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    'kindofexpert',
                    'kindOfExpertName',
                    setKoeSelected,
                    koeSelected
                  )
                }}
              />
            </div>
            {console.log('length', koeSelected.length)}

            <div className='columnsSelect'>
              <label htmlFor='practice'>Practice</label>
              <Select
                options={practiceOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && !practiceSelected ? 'novalidated' : 'select'
                }
                onChange={(e) => setPracticeSelected(e)}
              />
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
                  handleCreate(
                    e,
                    'industry',
                    'industryName',
                    setCtcSelected,
                    ctcSelected
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='rCompaniesOptions'>Companies Examples</label>
              <CreatableSelect
                options={rCompaniesOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && rcieSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    'company',
                    'companyName',
                    setRcieSelected,
                    rcieSelected
                  )
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
                onChange={(e) =>
                  handleCreate(
                    e,
                    'company',
                    'companyName',
                    setEcieSelected,
                    ecieSelected
                  )
                }
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='jobTitle'>Job Title</label>
              <CreatableSelect
                options={jobTitleOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && jobSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    'jobtitle',
                    'jobTitleName',
                    setJobSelected,
                    jobSelected
                  )
                }}
              />
            </div>
          </div>
          <div className='columns'>
            <div className='columnsSelect'>
              <label htmlFor='function'>Function</label>
              <CreatableSelect
                options={fonctionOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && yoeSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    'expertiselevel',
                    'expertiseLevelName',
                    setYoeSelected,
                    yoeSelected
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='experience'>Years of Experience</label>
              <CreatableSelect
                options={yearsOfExperienceOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && yoeSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    'expertiselevel',
                    'expertiseLevelName',
                    setYoeSelected,
                    yoeSelected
                  )
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
                  handleCreate(
                    e,
                    'geoexpertise',
                    'geoExpertiseName',
                    setGeoSelected,
                    geoSelected
                  )
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
                onChange={(e) =>
                  handleCreate(
                    e,
                    'languages',
                    'languagesName',
                    setLangSelected,
                    langSelected
                  )
                }
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
                onChange={(e) =>
                  handleCreate(
                    e,
                    'languages',
                    'languagesName',
                    setLangSelected,
                    langSelected
                  )
                }
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='comment'>Comment</label>
              <textarea
                id='comment'
                name='comment'
                rows='10'
                cols='60'
                role='presentation'
                {...register('feedbackExpert')}
              ></textarea>
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
