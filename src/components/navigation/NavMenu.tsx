import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faChartPie,
  faHome,
  faTable,
  faMeteor,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { RightTooltip } from "../SearchbarStyle";
import {
  GiAura,
  GiBackpack,
  GiInterstellarPath,
  GiSkills,
  GiSwordsPower,
  GiWomanElfFace,
  GiFamilyTree,
} from "react-icons/gi";

interface $Props {
  open: boolean;
}

const NavMenu = ({ open }: $Props) => {
  const location = useLocation();

  return (
    <Menu open={open}>
      <TopSide>
        <Link
          to="/home"
          className={
            location.pathname === "/home" || location.pathname === "/"
              ? "menuItemActiv"
              : ""
          }
        >
          <FontAwesomeIcon icon={faHome} />
          <RightTooltip>Home</RightTooltip>
        </Link>
      </TopSide>
      <MiddleSide>
        <LeftSide>
          <Link
            to="/randomTable-overview"
            className={
              location.pathname === "/randomTable-overview"
                ? "menuItemActiv"
                : ""
            }
          >
            <FontAwesomeIcon icon={faTable} />
            <RightTooltip>Random Tables</RightTooltip>
          </Link>
        </LeftSide>
        <RightSide>
          <Link
            to="/spell-overview"
            className={
              location.pathname === "/spell-overview" ? "menuItemActiv" : ""
            }
          >
            <FontAwesomeIcon icon={faMeteor} />
            <RightTooltip>Spells</RightTooltip>
          </Link>
          <Link
            to="/talent-overview"
            className={
              location.pathname === "/talent-overview" ? "menuItemActiv" : ""
            }
          >
            <GiSwordsPower />
            <RightTooltip>Talents</RightTooltip>
          </Link>
          <Link
            to="/power-overview"
            className={
              location.pathname === "/power-overview" ? "menuItemActiv" : ""
            }
          >
            <GiAura />
            <RightTooltip>Power</RightTooltip>
          </Link>
          <Link
            to="/skill-overview"
            className={
              location.pathname === "/skill-overview" ? "menuItemActiv" : ""
            }
          >
            <GiSkills />
            <RightTooltip>Skill</RightTooltip>
          </Link>
          <Link
            to="/race-overview"
            className={
              location.pathname === "/race-overview" ? "menuItemActiv" : ""
            }
          >
            <GiWomanElfFace />
            <RightTooltip>Races</RightTooltip>
          </Link>
          <Link
            to="/item-overview"
            className={
              location.pathname === "/item-overview" ? "menuItemActiv" : ""
            }
          >
            <GiBackpack />
            <RightTooltip>Items</RightTooltip>
          </Link>
          <Link
            to="/tradition-overview"
            className={
              location.pathname === "/tradition-overview" ? "menuItemActiv" : ""
            }
          >
            <GiInterstellarPath />
            <RightTooltip>Traditions</RightTooltip>
          </Link>
          <Link
            to="/origin-overview"
            className={
              location.pathname === "/origin-overview" ? "menuItemActiv" : ""
            }
          >
            <GiFamilyTree />
            <RightTooltip>Origins</RightTooltip>
          </Link>
          <Link
            to="/character-overview"
            className={
              location.pathname === "/character-overview" ? "menuItemActiv" : ""
            }
          >
            <FontAwesomeIcon icon={faUsers} />
            <RightTooltip>Characters</RightTooltip>
          </Link>
        </RightSide>
      </MiddleSide>
      <BottomSide>
        <Seperator />
        <Link
          to="/statistics"
          className={location.pathname === "/statistics" ? "menuItemActiv" : ""}
        >
          <FontAwesomeIcon icon={faChartPie} />
          <RightTooltip>Statistics</RightTooltip>
        </Link>
        <Link
          to="/options"
          className={location.pathname === "/options" ? "menuItemActiv" : ""}
        >
          <FontAwesomeIcon icon={faCog} />
          <RightTooltip>Options</RightTooltip>
        </Link>
      </BottomSide>
    </Menu>
  );
};

export default NavMenu;

type MenuType = {
  open?: boolean;
};

export const Menu = styled.div<MenuType>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${({ theme }) => theme.main.backgroundColor};
  height: calc(100vh - 1.5em - 55px);
  text-align: center;
  padding: 1rem;

  overflow: visible;

  position: fixed;
  z-index: 950;
  top: 50px;
  left: 0;

  @media (max-width: 576px) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

const Seperator = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.tile.backgroundColor};
  flex: 1 1 auto;
  min-width: 100%;
  max-height: 0px;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 10px);

  svg {
    margin-right: 5px;
  }

  a {
    flex: 1 1 auto;
    max-height: 20px;
    font-size: 20px;
    text-align: center;
    padding: 0.75rem 0;
    color: ${({ theme }) => theme.tile.color};
    text-decoration: none;
    transition: color 0.3s linear;

    position: relative;
    display: inline-block;

    svg {
      padding: 0px;
      margin: 0px;
    }
  }

  a:hover {
    color: ${({ theme }) => theme.tile.color};
    ${RightTooltip} {
      opacity: 1;
      visibility: visible;
    }
  }

  a.menuItemActiv {
    color: ${({ theme }) => theme.main.highlight};
  }
`;
const MiddleSide = styled.div``;
const BottomSide = styled(TopSide)``;
const LeftSide = styled(TopSide)`
  width: 32px;
  float: left;
`;
const RightSide = styled(LeftSide)`
  margin-left: 5px;
  padding-left: 5px;
  border-left: 2px solid ${({ theme }) => theme.tile.backgroundColor};
`;
