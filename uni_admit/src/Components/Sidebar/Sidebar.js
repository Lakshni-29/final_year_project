import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";

import home from "../../images/home.png";
import assessment from "../../images/assessment.png";
import application from "../../images/application.png";
import documents from "../../images/documents.png";
import vtour from "../../images/vtour.png";
import compare from "../../images/compare.png";
import assistance from "../../images/assisstance.png";
import logout from "../../images/logout.png";

import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Sidebar component 
  return (
    <div className="side" >
      <CDBSidebar textColor="#000" backgroundColor="#fff" >
        <CDBSidebarHeader>
          <a href="/" className="text-decoration-none">
            <img style={{ width: "14em" }} src={logo} alt={logo}  />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink activeClassName="activeClicked">
              <Link
                to="/"
                state={["Home"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={home} alt="" height={28} width={28} />
                  Home</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/assessment"
                state={["College Finder"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={assessment} alt="" height={30} width={30} />
                  College Finder</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/admission"
                state={["Admission Timeline"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={application} alt="" height={33} width={33} />
                  Admission Timeline</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/document"
                state={["Documents"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={documents} alt="" height={30} width={30} />
                  Documents</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/tour"
                state={["Virtual Tour"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={vtour} alt="" height={35} width={35} />
                 Virtual Tour</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/compare"
                state={["Comparision Tool"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={compare} alt="" height={30} width={30} />
                 Comparision Tool</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/assist"
                state={["Assistance"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={assistance} alt="" height={30} width={30} />
                 Assistance</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <br></br>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/"
                state={["Logout"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={logout} alt="" height={30} width={30} />
                 Logout</CDBSidebarMenuItem>
              </Link>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
