import {useState} from 'react'

import styled from 'styled-components'
import SideNav from './SideNav'
import { useTransition, useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Header = ({setCurCat, curCat}) => {
    const [showSideNav, setShowSideNav] = useState(false)

    const sidenavTransition = useTransition(showSideNav, null, {
        from:{right:"-999px"},
        enter:{right:"0px"},
        leave:{right:"-999px"}
    })

    const menuBurgerTop = useSpring({
        to:{top:showSideNav ? "17px" : "5px", transform: showSideNav ? "rotate(45deg)" : "rotate(0deg)"},
        from:{top:"5px", transform:"rotate(0deg)"},
    })

    const menuBurgerBottom = useSpring({
        to:{top:showSideNav ? "-8px" : "5px", transform: showSideNav ? "rotate(-45deg)" : "rotate(0deg)"},
        from:{top:"5px", transform:"rotate(0deg)"},
    })

    const menuBurgerTransitionMiddle = useSpring({
        to:{
            right:showSideNav ? "-20px" : "0px",
            opacity:showSideNav ? 0 : 1
        },
        from:{
            right:"0px",
            opacity:1
        }
    })

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

        @media all and (min-width:450px){
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

        @media all and (min-width:450px){
            display:${({showSideNav}) => showSideNav === true ? "block" : "none"};
        }

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

    const SideNavWrapper = styled(animated.div)`
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

    return (
        <Header>
            <HeaderWrapper>
                <h3>Gamezone</h3>
                <div className="menuWrapper">
                    <DesktopMenu showSideNav={showSideNav}>
                        <ul>
                            <MenuLink><Link to="/HTML5" className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</Link></MenuLink>
                            <MenuLink><Link to="/APK" className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</Link></MenuLink>
                        </ul>
                    </DesktopMenu>
                    <MenuBurger onClick={() => setShowSideNav(!showSideNav)} showSideNav={showSideNav}>
                        {/* {test.map(({item, key, props}) => item && <animated.span style={props} key={key}></animated.span>)} */}
                        <animated.span style={menuBurgerTop}></animated.span>
                        <animated.span style={menuBurgerTransitionMiddle}></animated.span>
                        <animated.span style={menuBurgerBottom}></animated.span>
                    </MenuBurger>
                </div>
            </HeaderWrapper>
            {sidenavTransition.map(({item, key, props}) => 
                item &&
                    <SideNavWrapper showSideNav={showSideNav} style={props} key={key}>
                        <div className="mobileMenu">
                            <ul>
                                <MenuLinkSub><Link to="/HTML5" className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</Link></MenuLinkSub>
                                <MenuLinkSub><Link to="/APK" className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</Link></MenuLinkSub>
                            </ul>
                        </div>
                    </SideNavWrapper>
            )}
        </Header>
    )
}

export default Header
