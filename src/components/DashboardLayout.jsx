import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const [user] = useState(() => {
    const savedUser =
      localStorage.getItem("loggedInUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // Get user's name
  const firstName = user?.firstName || "User";
  const lastName = user?.lastName || "";

  const fullName =
    `${firstName} ${lastName}`.trim();

  // Get user's email
  const email =
    user?.email || "No email available";

  // Create initials
  const initials =
    `${firstName.charAt(0)}${lastName.charAt(0)}`
      .toUpperCase();

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");

    navigate("/signin");
  };

  return (
    <>
      {/* TOP BAR */}

      <TopBar>

        <TopBarTitle>
          WebTech Practice Dashboard
        </TopBarTitle>

        <TopBarButton
          onClick={() => navigate("/")}
        >
          Home
        </TopBarButton>

      </TopBar>


      <DashboardWrapper>

        {/* SIDEBAR */}

        <Sidebar>

          {/* LOGGED-IN USER */}

          <UserBox>

            <Avatar>
              {initials || "U"}
            </Avatar>

            <UserDetails>

              <strong>
                {fullName}
              </strong>

              <span>
                {email}
              </span>

            </UserDetails>

          </UserBox>


          {/* DASHBOARD */}

          <SidebarSection>

            <SidebarTitle>
              DASHBOARD
            </SidebarTitle>

            <SidebarLink
              active={
                location.pathname ===
                "/overview"
              }
              onClick={() =>
                navigate("/overview")
              }
            >
              Overview
            </SidebarLink>


            <SidebarLink
              active={
                location.pathname ===
                "/profile"
              }
              onClick={() =>
                navigate("/profile")
              }
            >
              Profile Settings
            </SidebarLink>


            <SidebarLink
              active={
                location.pathname ===
                "/security"
              }
              onClick={() =>
                navigate("/security")
              }
            >
              Security
            </SidebarLink>


            <SidebarLink
              active={
                location.pathname ===
                "/notification"
              }
              onClick={() =>
                navigate("/notification")
              }
            >
              Notification
            </SidebarLink>

          </SidebarSection>


          {/* QUICK ACTION */}

          <SidebarSection>

            <SidebarTitle>
              QUICK ACTION
            </SidebarTitle>

            <SidebarLink
              active={
                location.pathname ===
                "/helpsupport"
              }
              onClick={() =>
                navigate("/helpsupport")
              }
            >
              Help & Support
            </SidebarLink>

          </SidebarSection>


          {/* ACCOUNT */}

          <SidebarSection>

            <SidebarTitle>
              ACCOUNT
            </SidebarTitle>

            <SidebarLink
              onClick={handleSignOut}
            >
              Sign out
            </SidebarLink>

          </SidebarSection>

        </Sidebar>


        {/* PAGE CONTENT */}

        <DashboardContent>
          {children}
        </DashboardContent>

      </DashboardWrapper>
    </>
  );
}

export default DashboardLayout;