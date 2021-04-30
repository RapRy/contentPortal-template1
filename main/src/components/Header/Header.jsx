import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'

import styled from 'styled-components'
// import SideNav from './SideNav'
// import { useTransition, useSpring, animated } from 'react-spring'
import { fetchCategories } from '../../actions/categories'


const Header = () => {
    const [data, setData] = useState({})
    const { activeCat, categories, activeSubcat } = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()

    const getCategories = (e, category) => {
        e.preventDefault()
        dispatch(fetchCategories(category))
    }

    useEffect(() => {
        if(activeCat) setData({activeCat, categories, activeSubcat})
    }, [activeCat])

    return (
        <HeaderStyle>
            <HeaderWrapper>
                <h3>Gamezone</h3>
                <div className="menuWrapper">
                    <DesktopMenu>
                        <ul>
                            {
                                _.isEmpty(data) === false && data.categories.map(({ catName, _id }, i) => (
                                    <MenuLink key={_id} onClick={(e) => getCategories(e, catName)}>
                                        <a href="#" to={`/${catName}`} className={activeCat._id === _id ? "activeCat" : ""}>
                                            {catName}
                                        </a>
                                    </MenuLink>
                                ))
                            }
                        </ul>
                    </DesktopMenu>
                </div>
            </HeaderWrapper>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    min-width:375px;
    background:#7f1616;
    margin-bottom:30px;
`

const HeaderWrapper = styled.div`
    width:100%;
    height:85px;
    max-width:900px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    padding:0px 10px;
    align-items:center;

    h3{
        color:#fff;
        font-size:2rem;
        font-weight:700;
        justify-self:start;
    }

    .menuWrapper{justify-self:end;}
`
// original display none
const DesktopMenu = styled.div`
    display:block; 
`

const MenuLink = styled.li`
    display:inline-block;
    margin-right:20px;

    &:last-child{
        margin-right:0;
    }

    a{
        color:#fff;
        font-size:1rem;
        font-weight:500;
        text-decoration:none;
        cursor:pointer;

        &.activeCat{
            color:#ffea00;
        }
    }
`

const MenuBurger = styled.div`
    width:48px;
    height:40px;
    border-radius:5px;
    display:block;
    position:relative;
    z-index:4;
    cursor:pointer;


    span{
        display:block;
        background:#fff;
        position:relative;
        border-radius:1px;
        width:36px;
        height:5px;
        right:0px;
        top:5px;
        margin-bottom:7px;
        transform-origin:center;
    }
`

const SideNavWrapper = styled.div`
    position:absolute;
    width:200px;
    height:100%;
    top:0;
    right:"-999px";
    background:#292727;
    z-index:3;
    padding:95px 0 0 15px;
    display:block;
`

const MenuLinkSub = styled.li`
    margin-bottom:30px;

    &:last-child{
        margin-bottom:0;
    }

    a{
        color:#fff;
        font-size:1rem;
        font-weight:500;
        text-decoration:none;
        cursor:pointer;

        &.activeCat{
            color:#ffea00;
        }
    }
`  

export default Header
