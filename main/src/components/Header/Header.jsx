import {useState} from 'react'

import styled from 'styled-components'
import SideNav from './SideNav'

const Header = ({setCurCat, curCat}) => {
    const [showSideNav, setShowSideNav] = useState(false)

    const Header = styled.header`
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

    const DesktopMenu = styled.div`
        display:none;

        @media all and (mIN-width:450px){
            display:${({showSideNav}) => showSideNav === true ? "none" : "block"}   
        }
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

        @media all and (mIN-width:450px){
            display:${({showSideNav}) => showSideNav === true ? "block" : "none"};
        }

        span{
            display:block;
            background:#fff;
            position:relative;
            border-radius:1px;
            width:36px;
            height:5px;
            right:0;
            top:5px;
            margin-bottom:7px;
        }
    `

    return (
        <Header>
            <HeaderWrapper>
                <h3>Gamezone</h3>
                <div className="menuWrapper">
                    <DesktopMenu showSideNav={showSideNav}>
                        <ul>
                            <MenuLink><a className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</a></MenuLink>
                            <MenuLink><a className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</a></MenuLink>
                        </ul>
                    </DesktopMenu>
                    <MenuBurger onClick={() => setShowSideNav(!showSideNav)} showSideNav={showSideNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuBurger>
                </div>
            </HeaderWrapper>
            {showSideNav === true && <SideNav showSideNav={showSideNav} setCurCat={setCurCat} curCat={curCat} />}
        </Header>
    )
}

export default Header
