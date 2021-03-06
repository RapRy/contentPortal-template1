import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { useState, useEffect } from 'react'

const SideNav = ({ setCurCat, showSideNav, curCat }) => {
    const [anim, setAnim] = useState(false);

    const transition = useTransition(showSideNav, null, {
        from:{left:"0px"},
        enter:{left:"100px"},
        leave:{left:"0px"}
    })

    const SideNavWrapper = styled(animated.div)`
        position:absolute;
        width:200px;
        height:100%;
        top:0;
        left:0;
        background:#292727;
        z-index:3;
        padding:95px 0 0 15px;
        display:block;
        // display:${({showSideNav}) => showSideNav === true ? "block" : "none"};
    `

    const MenuLink = styled.li`
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
        transition.map(({item, key, props}) => 
            item &&
                <SideNavWrapper showSideNav={showSideNav} style={props} key={key}>
                    <div className="mobileMenu">
                        <ul>
                            <MenuLink><a className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</a></MenuLink>
                            <MenuLink><a className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</a></MenuLink>
                        </ul>
                    </div>
                </SideNavWrapper>
        )

        // <SideNavWrapper showSideNav={showSideNav}>
        //     <div className="mobileMenu">
        //         <ul>
        //             <MenuLink><a className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</a></MenuLink>
        //             <MenuLink><a className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</a></MenuLink>
        //         </ul>
        //     </div>
        // </SideNavWrapper>
    )
}

export default SideNav
