import styled from 'styled-components'
import SideNav from './SideNav'

const Header = () => {
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
            color:#fff;
            text-decoration:none;
        }
    `

    const MenuBurger = styled.div`
        width:48px;
        height:40px;
        border-radius:5px;
        display:none;

        span{
            display:block;
            background:#000;
            position:relative;
            border-radius:2px;
            width:36px;
            height:5px;
            right:0;
            top:5px;
            margin-bottom:5px;
        }
    `

    return (
        <Header>
            <HeaderWrapper>
                <h3>Gamezone</h3>
                <div className="menuWrapper">
                    <DesktopMenu>
                        <ul>
                            <MenuLink><a href="#">HTML5</a></MenuLink>
                            <MenuLink><a href="#">Android</a></MenuLink>
                        </ul>
                    </DesktopMenu>
                    <MenuBurger>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuBurger>
                </div>
            </HeaderWrapper>
            <SideNav />
        </Header>
    )
}

export default Header
