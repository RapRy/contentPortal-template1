import styled from 'styled-components'

const SideNav = ({ setCurCat, showSideNav, curCat }) => {
    const SideNavWrapper = styled.div`
        position:absolute;
        width:200px;
        height:100%;
        top:0;
        right:0;
        background:#292727;
        z-index:3;
        padding:95px 0 0 15px;
        display:${({showSideNav}) => showSideNav === true ? "block" : "none"};
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

            &.activeCat{
                color:#ffea00;
            }
        }
    `    

    return (
        <SideNavWrapper showSideNav={showSideNav}>
            <div className="mobileMenu">
                <ul>
                    <MenuLink><a className={curCat === "HTML5" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="HTML5">HTML5</a></MenuLink>
                    <MenuLink><a className={curCat === "Games-apk" && "activeCat"} onClick={(e) => setCurCat(e.target.dataset.cat)} data-cat="Games-apk">Android</a></MenuLink>
                </ul>
            </div>
        </SideNavWrapper>
    )
}

export default SideNav
