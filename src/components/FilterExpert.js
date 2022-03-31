import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import chevronDroit from '../assets/chevronDroit.svg'
import chevronGauche from '../assets/chevronGauche.svg'
import filter from '../assets/filter.png'
import loupe from '../assets/search.png'

import './styles/FilterExpert.css'


const FilterExpert = (props) => {
//states filters
    const [filters, setFilters] = useState("")
    const [idKoe, setIdKoe] = useState([])
    const [filPrice, setFilPrice] = useState([])
    const [idPractice, setIdPractice] = useState([])
    const [idIndustry, setIdIndustry] = useState([])
    const [idJob, setIdJob] = useState([])
    const [idGeo, setIdGeo] = useState([])
    const [idLang, setIdLang] = useState([])
    const [idYoe, setIdYoe] = useState([])
    const [filCie, setFilCie] = useState("")
    const [filPastCie, setFilPastCie] = useState("")
    const [filFeedback, setFilFeedback] = useState("")
    const [filKey, setFilKey] = useState("")

//states options drop-down menu
    const [options, setOptions] = useState(null)
    const [newOptions, setNewOptions] = useState([])


//choice drop-down menu
    useEffect(() => {
        const getOptions = () => {
            axios.get('http://localhost:4040/experts/form').then((res) => setOptions(res.data))
        }
        getOptions()
    }, [newOptions])

//filters
    useEffect(() => {
        let filter =[]; 

        idKoe && filter.push(`kindofexpert=${idKoe}`); 
        filPrice && filter.push(`price=${filPrice}`);
        idPractice && filter.push(`practice=${idPractice}`);
        idIndustry && filter.push(`industry=${idIndustry}`); 
        idJob && filter.push(`jobtitle=${idJob}`);  
        idGeo && filter.push(`geo=${idGeo}`);  
        idLang && filter.push(`lang=${idLang}`); 
        idYoe && filter.push(`yoe=${idYoe}`); 
        filCie && filter.push(`cie=${filCie}`); 
        filPastCie && filter.push(`pastcie=${filPastCie}`);
        filFeedback && filter.push(`feedback=${filFeedback}`);
        filKey&& filter.push(`key=${filKey}`); 

        setFilters(`?${filter.join('&')}`); 
        }, [idKoe, filPrice, idPractice, idIndustry, idJob, idGeo, idLang, idYoe, filCie, filPastCie, filFeedback, filKey]); 


    useEffect(() => {
        axios
            .get(`http://localhost:4040/filter${filters}`) 
            .then((res) => res.data)
            .then((res) => console.log('experts', res) || props.setExperts(res))
        }, [filters])
    
        console.log("filters", filters)

// remove filters
    const removeFilters = () => {
        setFilters("")
        setIdKoe([])
        setFilPrice([])
        setIdPractice([])
        setIdIndustry([])
        setIdJob([])
        setIdGeo([])
        setIdLang([])
        setIdYoe([])
        setFilCie("")
        setFilPastCie("")
        setFilFeedback("")
        setFilKey("")
    }

//button scroll filter

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        };


    return (
        <div className='filter'>
            <div className="sousfilter">
                <img src={filter} onClick={removeFilters} alt='filter' id='filter' width='20px' />

                <ul className="filterBar" ref={ref}>

                    <div>
                        <FormControl  > 
                            <InputLabel id="koe">Type</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="koe"
                                multiple
                                value={idKoe}
                                onChange={e=> setIdKoe(e.target.value)}
                            >
                            {options && options.kindOfExpert.map((koe) => (
                            <MenuItem key={koe.id} value={koe.id}> {koe.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>  

                    <div>            
                        <FormControl  > 
                            <InputLabel id="price">Price</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="price"
                                multiple
                                value={filPrice}
                                onChange={e=> setFilPrice(e.target.value)}
                            >
                            <MenuItem value={1}> {"\u003C"} 250 € </MenuItem>
                            <MenuItem value={2}> 250 € to 500 € </MenuItem>
                            <MenuItem value={3}> {"\u003E"} 500 € </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                            
                    <div>
                        <FormControl  > 
                            <InputLabel id="practice">Practice</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="practice"
                                multiple
                                value={idPractice}
                                onChange={e=> setIdPractice(e.target.value)}
                            >
                            {options && options.practice.map((el) => (
                            <MenuItem key={el.id} value={el.id}> {el.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>  

                    <div>
                        <FormControl  > 
                            <InputLabel id="indu">Industry</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="indu"
                                multiple
                                value={idIndustry}
                                onChange={e=> setIdIndustry(e.target.value)}
                            >
                            {options && options.industry.map((indu) => (
                            <MenuItem key={indu.id} value={indu.id}> {indu.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div> 

                    <div>
                        <FormControl  > 
                            <InputLabel id="job">Job title</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="job"
                                multiple
                                value={idJob}
                                onChange={e=> setIdJob(e.target.value)}
                            >
                            {options && options.jobTitle.map((job) => (
                            <MenuItem key={job.id} value={job.id}> {job.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>             

                    <div>
                        <FormControl  > 
                            <InputLabel id="geo">Geo Expertise</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="geo"
                                multiple
                                value={idGeo}
                                onChange={e=> setIdGeo(e.target.value)}
                            >
                            {options && options.geoExpertise.map((geo) => (
                            <MenuItem key={geo.id} value={geo.id}> {geo.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>                      

                    <div>
                        <FormControl  > 
                            <InputLabel id="lang">Languages</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="lang"
                                multiple
                                value={idLang}
                                onChange={e=> setIdLang(e.target.value)}
                            >
                            {options && options.languages.map((lang) => (
                            <MenuItem key={lang.id} value={lang.id}> {lang.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>            

                    <div>
                        <FormControl  > 
                            <InputLabel id="yoe">Years of Exp</InputLabel>
                            <Select sx={{ width: 150, maxHeight: 40}}
                                labelId="yoe"
                                multiple
                                value={idYoe}
                                onChange={e=> setIdYoe(e.target.value)}
                            >
                            {options && options.expertiseLevel.map((yoe) => (
                            <MenuItem key={yoe.id} value={yoe.id}> {yoe.value} </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>  

                    <div className='search'>
                        <img src={loupe} alt='search' width='14px' />  
                        <input type='search' 
                        name='searchBar' 
                        id='searchBar' 
                        autocomplete="off"
                        value={filCie} 
                        onChange={e=> setFilCie(e.target.value)} 
                        placeholder='Company'/>
                    </div>
                    <div className='search'>
                        <img src={loupe} alt='search' width='14px' />  
                        <input type='search' 
                        name='searchBar' 
                        id='searchBar' 
                        autocomplete="off"
                        value={filPastCie} 
                        onChange={e=> setFilPastCie(e.target.value)} 
                        placeholder='Past Companies'/>
                    </div>
                    <div className='search'>
                        <img src={loupe} alt='search' width='14px' />  
                        <input type='search' 
                        name='searchBar' 
                        id='searchBar' 
                        autocomplete="off"
                        value={filFeedback} 
                        onChange={e=> setFilFeedback(e.target.value)} 
                        placeholder='Comment'/>
                    </div>
                    <div className='search'>
                        <img src={loupe} alt='search' width='14px' />  
                        <input type='search' 
                        name='searchBar' 
                        id='searchBar' 
                        autocomplete="off"
                        value={filKey} 
                        onChange={e=> setFilKey(e.target.value)} 
                        placeholder='Keywords'/>
                    </div>

                </ul>

                <div className='scroll'>
                    <img src={chevronGauche} onClick={() => scroll(-100)} alt='left' width='30px' />
                    <img src={chevronDroit} onClick={()=> scroll(100)} alt='right' width='30px' />
                </div>
                
            </div>
        </div>
    )
}

export default FilterExpert