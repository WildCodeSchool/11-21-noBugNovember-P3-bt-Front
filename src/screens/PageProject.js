import axios from 'axios'
import CreatableSelect from 'react-select/creatable'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/PageForm.css'

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
  const [ptSelected, setPtSelected] = useState([])
  const [statusSelected, setStatusSelected] = useState([])

  const [ecieSelected, setEcieSelected] = useState([])
  const [fonSelected, setFonSelected] = useState([])
  const [geoSelected, setGeoSelected] = useState([])
  const [indSelected, setIndSelected] = useState([])
  const [jobSelected, setJobSelected] = useState([])
  const [koeSelected, setKoeSelected] = useState([])
  const [langSelected, setLangSelected] = useState([])
  const [linSelected, setLinSelected] = useState([])
  const [rcieSelected, setRcieSelected] = useState([])
  const [seSelected, setSeSelected] = useState([])
  const [yoeSelected, setYoeSelected] = useState([])

  const [error, setError] = useState(false)
  const [newOptions, setNewOptions] = useState([])

  useEffect(() => {
    const getOptions = () => {
      axios
        .get('http://localhost:4040/projects/form')
        .then((res) => setOptions(res.data))
    }
    getOptions()
  }, [newOptions])

  useEffect(() => {
    // listes déroulantes fermées
    setClientOptions(options.client)
    setPracticeOptions(options.practice)
    setStatusOptions(options.status)

    // listes déroulantes ouvertes
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

  const handleCreate = async (
    inputValue,
    table,
    column,
    set,
    selected,
    multiple,
    option,
    setOption
  ) => {
    let newDataPoulet = []
    for (let i = 0; i < inputValue.length; i++) {
      let temp = []
      // If the Value is New
      if (Object.keys(inputValue[i]).includes('__isNew__')) {
        const newValue = {
          value: inputValue[i].value,
          table: table,
          column: column,
        }
        temp = await axios
          .post('http://localhost:4040/projects/test', newValue)
          .then((res) => {
            setOption([...option, res.data])
            return res.data
          })
          .catch(function (error) {
            console.log(error)
          })
        if (multiple === 'solo') {
          newDataPoulet = temp
        } else {
          newDataPoulet = [...newDataPoulet, temp]
        }
        temp = []
        // If the Value Is in DATABASE
      } else {
        if (multiple === 'solo') {
          const goodOpt = option.filter(
            (el) => el.value === inputValue[i].value
          )
          newDataPoulet = goodOpt
        } else {
          const goodOpt2 = option.filter(
            (el) => el.value === inputValue[i].value
          )
          newDataPoulet.push(...goodOpt2)
        }
      }
    }

    set(newDataPoulet)
  }

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = async (data) => {
    if (clientSelected.length !== 0 && statusSelected.length !== 0) {
      setError(false)
      const client_id = clientSelected.id
      const status_id = statusSelected.id

      let ecieDatas = []
      let fonDatas = []
      let geoDatas = []
      let indDatas = []
      let jobDatas = []
      let koeDatas = []
      let langDatas = []
      let linDatas = []
      let praDatas = []
      let ptDatas = []
      let rcieDatas = []
      let seDatas = []
      let yoeDatas = []

      ecieSelected.forEach((ecie) => ecieDatas.push(ecie.id))
      fonSelected.forEach((fon) => fonDatas.push(fon.id))
      geoSelected.forEach((geo) => geoDatas.push(geo.id))
      indSelected.forEach((ind) => indDatas.push(ind.id))
      jobSelected.forEach((job) => jobDatas.push(job.id))
      koeSelected.forEach((koe) => koeDatas.push(koe.id))
      langSelected.forEach((lang) => langDatas.push(lang.id))
      linSelected.forEach((lin) => linDatas.push(lin.id))
      practiceSelected.forEach((pra) => praDatas.push(pra.id))
      ptSelected.forEach((pt) => ptDatas.push(pt.id))
      rcieSelected.forEach((rcie) => rcieDatas.push(rcie.id))
      seSelected.forEach((se) => seDatas.push(se.id))
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id))

      let excludedCompany_id = { excludedCompany_id: [...ecieDatas] }
      let fonction_id = { fonction_id: [...fonDatas] }
      let geoExpertise_id = { geoExpertise_id: [...geoDatas] }
      let industry_id = { industry_id: [...indDatas] }
      let jobTitle_id = { jobTitle_id: [...jobDatas] }
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] }
      let languages_id = { languages_id: [...langDatas] }
      let linkedinKeywords_id = { linkedinKeywords_id: [...linDatas] }
      let practice_id = { practice_id: [...praDatas] }
      let projectType_id = { projectType_id: [...ptDatas] }
      let exampleCompany_id = { exampleCompany_id: [...rcieDatas] }
      let service_id = { service_id: [...seDatas] }
      let expertiseLevel_id = { expertiseLevel_id: [...yoeDatas] }

      let datas = {
        numProject: data.numProject,
        projectTitle: data.projectTitle,
        totalPrice: data.totalPrice,
        itwStart: data.itwStart,
        itwDeadline: data.itwDeadline,
        quantityExpert: data.quantityExpert,
        clientComment: data.clientComment,

        client_id: client_id,
        status_id: status_id,

        ...excludedCompany_id,
        ...fonction_id,
        ...geoExpertise_id,
        ...industry_id,
        ...jobTitle_id,
        ...kindOfExpert_id,
        ...languages_id,
        ...linkedinKeywords_id,
        ...practice_id,
        ...projectType_id,
        ...exampleCompany_id,
        ...service_id,
        ...expertiseLevel_id,
      }

      await axios.post('http://localhost:4040/projects/', datas)

      navigate('/projects')
    } else {
      setError(true)
      data.preventDefault()
    }
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  return (
    <div className='tabContainerForm '>
      <div className='pageForm'>
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
            <div id='idWrapper' className='columnsDiv'>
              <h1 id='project'>PROJECT</h1>
              <div id='projectNumber'>
                <label htmlFor='number'>N°</label>
                <input
                  id='number'
                  name='number'
                  type='key'
                  {...register('numProject')}
                  required
                ></input>
              </div>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='projectTitle'>Project Title</label>
              <input
                id='projectTitle'
                name='projectTitle'
                type='text'
                autoComplete='off'
                {...register('projectTitle')}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='client'>Num Client</label>
              <Select
                options={clientOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && !clientSelected ? 'novalidated' : 'select'
                }
                onChange={(e) => setClientSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='serviceOptions'>Service</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={serviceOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setSeSelected([e])
                  handleCreate(
                    e,
                    'service',
                    'serviceName',
                    setSeSelected,
                    seSelected,
                    'multiple',
                    serviceOptions,
                    setServiceOptions
                  )
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='totalPrice'>Total Price</label>
              <input
                id='totalPrice'
                name='totalPrice'
                type='number'
                autocomplete='off'
                {...register('totalPrice')}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='status'>Status</label>
              <Select
                menuPlacement='top'
                options={statusOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && !statusSelected ? 'novalidated' : 'select'
                }
                onChange={(e) => setStatusSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='projectType'>Project Type</label>
              <CreatableSelect
                menuPlacement='top'
                options={projectTypeOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && ptSelected.length === 0 ? 'novalidated' : 'select'
                }
                onChange={(e) => {
                  setPtSelected(e)
                  handleCreate(
                    [e],
                    'projectType',
                    'projectTypeName',
                    setPtSelected,
                    ptSelected,
                    'solo',
                    projectTypeOptions,
                    setProjectTypeOptions
                  )
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwStart'>ITW Start</label>
              <input
                id='itwStart'
                name='itwStart'
                type='text'
                role='presentation'
                autoComplete='off'
                {...register('itwStart')}
              ></input>
            </div>

            <div className='columnsDiv'>
              <label htmlFor='itwDeadline'>ITW Deadline</label>
              <input
                id='itwDeadline'
                name='itwDeadline'
                type='text'
                role='presentation'
                autoComplete='off'
                {...register('itwDeadline')}
              ></input>
            </div>
          </div>

          <div className='columns'>
            <div className='columnsDiv'>
              <label htmlFor='quantityExpert'>Quantity</label>
              <input
                id='quantityExpert'
                name='quantityExpert'
                type='number'
                autocomplete='off'
                {...register('quantityExpert')}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='kindOfExpertOptions'>Type</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={kindOfExpertOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setKoeSelected(e)
                  handleCreate(
                    e,
                    'kindofexpert',
                    'kindOfExpertName',
                    setKoeSelected,
                    koeSelected,
                    'multiple',
                    kindOfExpertOptions,
                    setKindOfExpertOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='practice'>Practice</label>
              <Select
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={practiceOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => setPracticeSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='Industry'>Industry</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={industryOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setIndSelected(e)
                  handleCreate(
                    e,
                    'industry',
                    'industryName',
                    setIndSelected,
                    indSelected,
                    'multiple',
                    industryOptions,
                    setIndustryOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='rCompaniesOptions'>Companies Examples</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={rCompaniesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setRcieSelected(e)
                  handleCreate(
                    e,
                    'company',
                    'companyName',
                    setRcieSelected,
                    rcieSelected,
                    'multiple',
                    rCompaniesOptions,
                    setRCompaniesOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='eCompaniesOptions'>Excluded Companies</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={eCompaniesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setEcieSelected(e)
                  handleCreate(
                    e,
                    'company',
                    'companyName',
                    setEcieSelected,
                    ecieSelected,
                    'multiple',
                    eCompaniesOptions,
                    setECompaniesOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='jobTitle'>Job Title</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={jobTitleOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setJobSelected(e)
                  handleCreate(
                    e,
                    'jobtitle',
                    'jobTitleName',
                    setJobSelected,
                    jobSelected,
                    'multiple',
                    jobTitleOptions,
                    setJobTitleOptions
                  )
                }}
              />
            </div>
          </div>

          <div className='columns'>
            <div className='columnsSelect'>
              <label htmlFor='fonction'>Function</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={fonctionOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setFonSelected(e)
                  handleCreate(
                    e,
                    'fonction',
                    'fonctionName',
                    setFonSelected,
                    fonSelected,
                    'multiple',
                    fonctionOptions,
                    setFonctionOptions
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
                  setYoeSelected(e)
                  handleCreate(
                    [e],
                    'expertiselevel',
                    'expertiseLevelName',
                    setYoeSelected,
                    yoeSelected,
                    'solo',
                    yearsOfExperienceOptions,
                    setYearsOfExperienceOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='geoExpertise'>Geo Expertise</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                defaultValue={selectedOptions}
                onChange={(e) => {
                  setGeoSelected(e)
                  handleCreate(
                    e,
                    'geoexpertise',
                    'geoExpertiseName',
                    setGeoSelected,
                    geoSelected,
                    'multiple',
                    geoExpertiseOptions,
                    setGeoExpertiseOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='languages'>Languages</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={languagesOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setLangSelected(e)
                  handleCreate(
                    e,
                    'languages',
                    'languagesName',
                    setLangSelected,
                    langSelected,
                    'multiple',
                    languagesOptions,
                    setLanguagesOptions
                  )
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='keywords'>Linkedin Keywords</label>
              <CreatableSelect
                menuPlacement='top'
                closeMenuOnSelect={false}
                options={linkedinOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setLinSelected(e)
                  handleCreate(
                    e,
                    'linkedinkeywords',
                    'linkedinKey',
                    setLinSelected,
                    linSelected,
                    'multiple',
                    linkedinOptions,
                    setLinkedinOptions
                  )
                }}
              />
            </div>

            <div className='columnsDiv'>
              <label htmlFor='clientComment'>Comment</label>
              <textarea
                id='clientComment'
                name='clientComment'
                rows='10'
                cols='60'
                role='presentation'
                autocomplete='off'
                {...register('clientComment')}
              ></textarea>
            </div>
          </div>
          <div className='checkOrTrash'>
            <button className='buttonAddForm'> Add </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PageProject
