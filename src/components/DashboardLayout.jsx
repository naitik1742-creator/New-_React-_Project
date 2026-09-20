import React from "react";
import { useNavigate } from "react-router-dom";

import {
  TopBar,
  TopBarTitle,
  TopBarButton,
  DashboardWrapper,
  Sidebar,
  UserBox,
  Avatar,
  UserDetails,
  SidebarSection,
  SidebarTitle,
  SidebarLink,
  DashboardContent,
} from "../theme/styled";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      
      <TopBar>
        <TopBarTitle>
          WebTech Practice Dashboard
        </TopBarTitle>

        <TopBarButton onClick={() => navigate("/")}>
          Home
        </TopBarButton>
      </TopBar>

      <DashboardWrapper>

        
        <Sidebar>

          <UserBox>
            <Avatar>DU</Avatar>

            <UserDetails>
              <strong>Demo User</strong>
              <span>demo@webtech.practice</span>
            </UserDetails>
          </UserBox>

          <SidebarSection>
            <SidebarTitle>DASHBOARD</SidebarTitle>

            <SidebarLink
              active
              onClick={() => navigate("/overview")}
            >
              Overview
            </SidebarLink>

            <SidebarLink
              onClick={() => navigate("/profile")}
            >
              Profile Settings
            </SidebarLink>

            <SidebarLink
            onClick={() => navigate("/security")}>
              Security
            </SidebarLink>

            <SidebarLink
            onClick={() => navigate("/notification")}>
              Notification
            </SidebarLink>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>QUICK ACTION</SidebarTitle>

            <SidebarLink
            onClick={() => navigate("/help")}>
              Help & Support
            </SidebarLink>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>ACCOUNT</SidebarTitle>

            <SidebarLink
              onClick={() => navigate("/signin")}
            >
              Sign out
            </SidebarLink>
          </SidebarSection>

        </Sidebar>

        
        <DashboardContent>
          {children}
        </DashboardContent>

      </DashboardWrapper>
    </>
  );
}

export default DashboardLayout;