import styled from 'styled-components'

const SideNav = () => {
    const SideNavWrapper = styled.div`
        position:absolute;
        width:200px;
        height:100%;
        top:0;
        right:0;
        background:#292727;
        z-index:3;
        padding:95px 0 0 15px;
        display:none;
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
            color:#fff;
            text-decoration:none;
        }
    `    

    return (
        <SideNavWrapper>
            <div className="mobileMenu">
                <ul>
                    <MenuLink><a href="#">HTML5</a></MenuLink>
                    <MenuLink><a href="#">Android</a></MenuLink>
                </ul>
            </div>
        </SideNavWrapper>
    )
}

export default SideNav
