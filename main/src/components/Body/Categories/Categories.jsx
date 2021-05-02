import {useEffect, useState} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { useSelector, useDispatch } from 'react-redux'

import { filterSubcategories } from '../../../actions/categories'

const Categories = () => {
    const [data, setData] = useState([])

    const { activeCat } = useSelector(state => state.dataReducer)
    const filters = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()

    const toggleCheckmark = (check, i) => {
        let filtered = filters

        if(data[i].subCatName === "All"){
            let alldata = []

            if(check === true){

                data.forEach((dat) => {
                    dat.isChecked = false
                    alldata.push(dat)
                    filtered.push(dat.subCatName)
                })

                // filter duplicate
                filtered = _.uniq(filtered, false)

            }else if(check === false){
                filtered = []

                data.forEach((dat, i) => {
                    dat.isChecked = true
                    alldata.push(dat)
                })
            }

            setData(alldata)
            dispatch(filterSubcategories(filtered))
        }else{
            data[i].isChecked = !check

            let updatedData = data[i]

            let filteredDatas = data.filter(dat => dat._id !== data[i]._id)


            filteredDatas.splice(i, 0, updatedData)

            if(check === true){
                // uncheck all if a subcat isCheck value turns false
                data[0].isChecked = false

                filtered.push(data[i].subCatName)

                // filter duplicate
                filtered = _.uniq(filtered, false)

                dispatch(filterSubcategories(filtered))
            }else if(check === false){
                let updatedFilters = filtered.filter(fil => fil !== data[i].subCatName)

                // check all if all subcats are checked
                if(filters.length === 1){
                    data[0].isChecked = true
                }

                if(updatedFilters.includes('All')){
                    if(updatedFilters.length === 1){
                        data[0].isChecked = !check
                        filteredDatas.splice(0, 1, data[0])
                        updatedFilters = []
                    }
                }

                dispatch(filterSubcategories(updatedFilters))
            }

            setData(filteredDatas)
        }
    }

    useEffect(() => {
        if (activeCat){
            activeCat.subCategories.forEach((subCat) => Object.assign(subCat, { isChecked: true }))
            const newData = [{ _id: null, parent_id: null, subCatName: "All", isChecked: true}, ...activeCat.subCategories]
            setData(newData)
        }
    }, [activeCat])

    return (
        <div>
            <CategoriesWrap>
                {
                    data.length > 0 && data.map(({ subCatName, _id, isChecked }, i) => (
                        <li key={_id}>
                            <Checkbox>
                                <CheckIcon isChecked={isChecked}>{isChecked === true ? <span>✔</span> : ""}</CheckIcon>
                                <input type="checkbox" id={subCatName} checked={isChecked} onChange={e => toggleCheckmark(isChecked, i)} />
                            </Checkbox>
                            <Label htmlFor={subCatName} isChecked={isChecked}>{subCatName}</Label>
                        </li>
                    ))
                }
            </CategoriesWrap>
        </div>
    )
}

const CategoriesWrap = styled.ul`
    max-width:900px;
    margin:0 auto;
    padding:0 20px;
    margin-bottom:20px;

    li{
        display:inline-block;
        margin-right:15px;

        &:last-child{margin-right:0;}
    }
`

const Checkbox = styled.div`
    display:inline-block;
    margin-right:5px;
    position:relative;
    width:15px;
    height:15px;

    input{
        opacity:0;
        position:absolute;
        top:0;
        left:0;
        width:15px;
        height:15px;
        cursor:pointer;
    }
`

const CheckIcon = styled.div`
    display:block;
    width:15px;
    height:15px;
    border:2px solid ${({isChecked}) => isChecked === true ? "#7f1616" : "#ccc"};
    border-radius:2px;
    position:absolute;
    top:3px;
    left:0;

    span{
        font-size:.75rem;
        position:absolute;
        top:-3px;
        left:0px;
        font-weight:700;
        color:#7f1616;
    }
`

const Label = styled.label`
    cursor:pointer;
    font-size:.9rem;
    font-weight:500;
    color: ${({isChecked}) => isChecked === true ? "#7f1616" : "#ccc"}
`

export default Categories
