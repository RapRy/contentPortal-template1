import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import styled from "styled-components";
// import SideNav from './SideNav'
import { useTransition, useSpring, animated } from "react-spring";
import { fetchCategories } from "../../actions/categories";
import { removeDetails } from "../../actions/content";

const Header = () => {
  const [data, setData] = useState({});
  const [showSidenav, setShowSidenav] = useState(false);
  const { activeCat, categories, activeSubcat } = useSelector(
    (state) => state.dataReducer
  );
  const dispatch = useDispatch();

  const sidenavTransition = useTransition(showSidenav, {
    from: { right: "-300px" },
    enter: { right: "0px" },
    leave: { right: "-300px" },
  });

  const menuBurgerTop = useSpring({
    to: {
      top: showSidenav ? "17px" : "5px",
      transform: showSidenav ? "rotate(45deg)" : "rotate(0deg)",
    },
    from: { top: "5px", transform: "rotate(0deg)" },
  });

  const menuBurgerBottom = useSpring({
    to: {
      top: showSidenav ? "-8px" : "5px",
      transform: showSidenav ? "rotate(-45deg)" : "rotate(0deg)",
    },
    from: { top: "5px", transform: "rotate(0deg)" },
  });

  const menuBurgerTransitionMiddle = useSpring({
    to: {
      right: showSidenav ? "-20px" : "0px",
      opacity: showSidenav ? 0 : 1,
    },
    from: {
      right: "0px",
      opacity: 1,
    },
  });

  const getCategories = (e, category) => {
    if (showSidenav === true) setShowSidenav(!showSidenav);

    e.preventDefault();
    dispatch(fetchCategories(category));
    dispatch(removeDetails([]));
  };

  useEffect(() => {
    if (activeCat) setData({ activeCat, categories, activeSubcat });
  }, [activeCat, activeSubcat, categories]);

  return (
    <HeaderStyle>
      <HeaderWrapper>
        <h3>PORTAL 1</h3>
        <div className="menuWrapper">
          <DesktopMenu showSidenav={showSidenav}>
            <ul>
              {_.isEmpty(data) === false &&
                data.categories.map(({ catName, _id }, i) => (
                  <MenuLink
                    key={_id}
                    onClick={(e) => getCategories(e, catName)}
                  >
                    <button
                      type="button"
                      className={activeCat._id === _id ? "activeCat" : ""}
                    >
                      {catName}
                    </button>
                  </MenuLink>
                ))}
            </ul>
          </DesktopMenu>
          <MenuBurger
            onClick={() => setShowSidenav(!showSidenav)}
            showSidenav={showSidenav}
          >
            <animated.span style={menuBurgerTop}></animated.span>
            <animated.span style={menuBurgerTransitionMiddle}></animated.span>
            <animated.span style={menuBurgerBottom}></animated.span>
          </MenuBurger>
        </div>
        {sidenavTransition(
          (style, item) =>
            item && (
              <SideNavWrapper style={style}>
                <div className="mobileMenu">
                  <ul>
                    {_.isEmpty(data) === false &&
                      data.categories.map(({ catName, _id }, i) => (
                        <MenuLinkSub
                          key={_id}
                          onClick={(e) => getCategories(e, catName)}
                        >
                          <button
                            type="button"
                            className={activeCat._id === _id ? "activeCat" : ""}
                          >
                            {catName}
                          </button>
                        </MenuLinkSub>
                      ))}
                  </ul>
                </div>
              </SideNavWrapper>
            )
        )}
      </HeaderWrapper>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  min-width: 375px;
  background: #7f1616;
  margin-bottom: 30px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 85px;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0px 10px;
  align-items: center;

  h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    justify-self: start;
  }

  .menuWrapper {
    justify-self: end;
  }
`;
// original display none
const DesktopMenu = styled.div`
  display: none;

  @media all and (min-width: 501px) {
    display: ${({ showSidenav }) => (showSidenav === true ? "none" : "block")};
  }
`;

const MenuLink = styled.li`
  display: inline-block;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  button {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;

    &.activeCat {
      color: #ffea00;
    }
  }
`;

const MenuBurger = styled.div`
  width: 48px;
  height: 40px;
  border-radius: 5px;
  display: block;
  position: relative;
  z-index: 4;
  cursor: pointer;

  @media all and (min-width: 501px) {
    display: ${({ showSidenav }) => (showSidenav === true ? "block" : "none")};
  }

  span {
    display: block;
    background: #fff;
    position: relative;
    border-radius: 1px;
    width: 36px;
    height: 5px;
    right: 0px;
    top: 5px;
    margin-bottom: 7px;
    transform-origin: center;
  }
`;

const SideNavWrapper = styled(animated.div)`
  position: absolute;
  width: 200px;
  height: 100%;
  top: 0;
  right: "-999px";
  background: #292727;
  z-index: 3;
  padding: 95px 0 0 15px;
  display: block;
`;

const MenuLinkSub = styled.li`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;

    &.activeCat {
      color: #ffea00;
    }
  }
`;

export default Header;
