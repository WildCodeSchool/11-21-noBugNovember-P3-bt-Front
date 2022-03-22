import './styles/PageForm.css'

import CreatableSelect from 'react-select/creatable'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const PageProjectEdit = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [options, setOptions] = useState([])

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
  const [numProjectSelected, setNumProjectSelected] = useState([])
  const [projectTitleSelected, setProjectTitleSelected] = useState([])
  const [totalPriceSelected, setTotalPriceSelected] = useState([])
  const [itwStartSelected, setItwStartSelected] = useState([])
  const [itwDeadlineSelected, setItwDeadlineSelected] = useState([])
  const [quantitySelected, setQuantitySelected] = useState([])
  const [clientCommentSelected, setClientCommentSelected] = useState([])

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

  //   State des Data du projet
  const [dataProject, setDataProject] = useState([])

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

  //*****  Decompose la BDD ****
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

  // ********************   DATA PROJECT ***************************

  useEffect(() => {
    const dataProjectFunc = () => {
      axios.get(`http://localhost:4040/projects/form/${id}`).then((res) => {
        console.log(res.data)
        // récupération de l'ensemble des données pré-existantes
        setDataProject(res.data)

        // données uniques champ libre
        setNumProjectSelected(res.data.numProject)
        setProjectTitleSelected(res.data.projectTitle)
        setTotalPriceSelected(res.data.totalPrice)
        setItwStartSelected(res.data.itwStart)
        setItwDeadlineSelected(res.data.itwDeadline)
        setQuantitySelected(res.data.quantity)
        setClientCommentSelected(res.data.comment)

        // données uniques liste déroulante
        setClientSelected(res.data.client)
        setPtSelected(res.data.projectType)
        setStatusSelected(res.data.status)
        setYoeSelected(res.data.expertiseLevel)

        // données multiples liste déroulante
        setEcieSelected(res.data.ecie)
        setFonSelected(res.data.fonction)
        setGeoSelected(res.data.geoExpertise)
        setIndSelected(res.data.industry)
        setJobSelected(res.data.jobTitle)
        setKoeSelected(res.data.kindOfExpert)
        setLangSelected(res.data.languages)
        setLinSelected(res.data.linkedin)
        setPracticeSelected(res.data.practice)
        setRcieSelected(res.data.rcie)
        setSeSelected(res.data.service)
      })
    }
    dataProjectFunc()
  }, [])

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
    if (
      clientSelected.length !== 0 &&
      ptSelected.length !== 0 &&
      statusSelected.length !== 0 &&
      yoeSelected.length !== 0
    ) {
      setError(false)

      const client_id = clientSelected.id
      const projectType_id = ptSelected.id
      const status_id = statusSelected.id
      const expertiseLevel_id = yoeSelected.id

      let ecieDatas = []
      let fonDatas = []
      let geoDatas = []
      let indDatas = []
      let jobDatas = []
      let koeDatas = []
      let langDatas = []
      let linDatas = []
      let praDatas = []
      let rcieDatas = []
      let seDatas = []

      ecieSelected.forEach((ecie) => ecieDatas.push(ecie.id))
      fonSelected.forEach((fon) => fonDatas.push(fon.id))
      geoSelected.forEach((geo) => geoDatas.push(geo.id))
      indSelected.forEach((ind) => indDatas.push(ind.id))
      jobSelected.forEach((job) => jobDatas.push(job.id))
      koeSelected.forEach(
        (koe) => console.log('koe test', koe) || koeDatas.push(koe.id)
      )
      langSelected.forEach((lang) => langDatas.push(lang.id))
      linSelected.forEach((lin) => linDatas.push(lin.id))
      practiceSelected.forEach((pra) => praDatas.push(pra.id))
      rcieSelected.forEach((rcie) => rcieDatas.push(rcie.id))
      seSelected.forEach((se) => seDatas.push(se.id))

      let excludedCompany_id = { excludedCompany_id: [...ecieDatas] }
      let fonction_id = { fonction_id: [...fonDatas] }
      let geoExpertise_id = { geoExpertise_id: [...geoDatas] }
      let industry_id = { industry_id: [...indDatas] }
      let jobTitle_id = { jobTitle_id: [...jobDatas] }
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] }
      let languages_id = { languages_id: [...langDatas] }
      let linkedinKeywords_id = { linkedinKeywords_id: [...linDatas] }
      let practice_id = { practice_id: [...praDatas] }
      let exampleCompany_id = { exampleCompany_id: [...ecieDatas] }
      let service_id = { service_id: [...seDatas] }

      let datas = {
        projectTitle: data.projectTitle,
        totalPrice: data.totalPrice,
        itwStart: data.itwStart,
        itwDeadline: data.itwDeadline,
        quantityExpert: data.quantityExpert,
        clientComment: data.clientComment,

        client_id: client_id,
        projectType_id: projectType_id,
        status_id: status_id,
        expertiseLevel_id: expertiseLevel_id,

        ...excludedCompany_id,
        ...fonction_id,
        ...geoExpertise_id,
        ...industry_id,
        ...jobTitle_id,
        ...kindOfExpert_id,
        ...languages_id,
        ...linkedinKeywords_id,
        ...practice_id,
        ...exampleCompany_id,
        ...service_id,
      }

      console.log('datas', datas)
      axios
        .put(`http://localhost:4040/projects/${id}`, datas)
        .then(function (res) {
          navigate(`/maxiProjectExpert/${id}`)
        })
    } else {
      setError(true)
      console.log('Form error', yoeSelected)
      data.preventDefault()
    }
  }

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  // ******************** DELETE PROJECTS *******************

  const onDelete = () => {
    axios.delete(`http://localhost:4040/projects/${id}`).then(function (res) {
      navigate('/projects')
    })
  }

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
                  value={numProjectSelected}
                  onChange={(e) => setNumProjectSelected(e.target.value)}
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
                value={projectTitleSelected}
                onChange={(e) => setProjectTitleSelected(e.target.value)}
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
                value={clientSelected}
                onChange={(e) => setClientSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='serviceOptions'>Service</label>
              <CreatableSelect
                value={seSelected}
                closeMenuOnSelect={false}
                options={serviceOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setSeSelected(e)
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
                autoComplete='off'
                {...register('totalPrice')}
                value={totalPriceSelected}
                onChange={(e) => setTotalPriceSelected(e.target.value)}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='status'>Status</label>
              <Select
                options={statusOptions}
                className='basic-multi-select'
                classNamePrefix={
                  error && !statusSelected ? 'novalidated' : 'select'
                }
                value={statusSelected}
                onChange={(e) => setStatusSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='projectType'>Project Type</label>
              <CreatableSelect
                value={ptSelected}
                options={projectTypeOptions}
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={(e) => {
                  setPtSelected(e)
                  handleCreate(
                    [e],
                    'projectType',
                    'projectTypeName',
                    setPtSelected,
                    ptSelected,
                    'solo',
                    projectTypeOptions
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
                value={itwStartSelected}
                onChange={(e) => setItwStartSelected(e.target.value)}
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
                value={itwDeadlineSelected}
                onChange={(e) => setItwDeadlineSelected(e.target.value)}
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
                autoComplete='off'
                {...register('quantityExpert')}
                value={quantitySelected}
                onChange={(e) => setQuantitySelected(e.target.value)}
              ></input>
            </div>

            <div className='columnsSelect'>
              <label htmlFor='kindOfExpertOptions'>Type</label>
              <CreatableSelect
                value={koeSelected}
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
                closeMenuOnSelect={false}
                options={practiceOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
                value={practiceSelected}
                onChange={(e) => setPracticeSelected(e)}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='Industry'>Industry</label>
              <CreatableSelect
                value={indSelected}
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
                value={rcieSelected}
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
                value={ecieSelected}
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
                value={jobSelected}
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
                value={fonSelected}
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
                value={yoeSelected}
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
                    yearsOfExperienceOptions
                  )
                }}
              />
            </div>

            <div className='columnsSelect'>
              <label htmlFor='geoExpertise'>Geo Expertise</label>
              <CreatableSelect
                value={geoSelected}
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className='basic-multi-select'
                classNamePrefix='select'
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
                value={langSelected}
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
                value={linSelected}
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
                autoComplete='off'
                {...register('clientComment')}
                value={clientCommentSelected}
                onChange={(e) => setClientCommentSelected(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='checkOrTrash'>
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

export default PageProjectEdit
