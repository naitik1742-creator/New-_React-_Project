import React from "react";
import DashboardLayout from "../components/DashboardLayout";



import {
  OverviewWrapper,
  WelcomeCard,
  WelcomeTitle,
  WelcomeText,
  InfoGrid,
  InfoCard,
  InfoTitle,
  InfoText,
  ProgressBar,
  Progress,
  QuickTitle,
  QuickGrid,
  QuickCard,
  QuickCardTitle,
  QuickCardText,
} from "../theme/styled";

function Overview() {
  return (

    <DashboardLayout>
    <OverviewWrapper>

      <WelcomeCard>
        <WelcomeTitle>
          Welcome back, Demo User
        </WelcomeTitle>

        <WelcomeText>
          Manage your profile settings and account preferences.
          Your data is securely stored in your browser's localStorage.
        </WelcomeText>

        
        <InfoGrid>

          <InfoCard>
            <InfoTitle>Theme</InfoTitle>

            <InfoText>
              Dark/Light mode persisted
              <br />
              across all pages
            </InfoText>

            <ProgressBar>
              <Progress />
            </ProgressBar>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Authentication</InfoTitle>

            <InfoText>
              Secure session stored in
              <br />
              browser storage
            </InfoText>

            <ProgressBar>
              <Progress />
            </ProgressBar>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Profile</InfoTitle>

            <InfoText>
              20% profile completed
              <br />
              (1/5 fields)
            </InfoText>

            <ProgressBar>
              <Progress />
            </ProgressBar>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Security</InfoTitle>

            <InfoText>
              Password protection and
              <br />
              account security
            </InfoText>

            <ProgressBar>
              <Progress />
            </ProgressBar>
          </InfoCard>

        </InfoGrid>

        
        <QuickTitle>
          Quick Actions
        </QuickTitle>

        <QuickGrid>

          <QuickCard>
            <QuickCardTitle>
              Edit Profile
            </QuickCardTitle>

            <QuickCardText>
              Update your personal information
            </QuickCardText>
          </QuickCard>

          <QuickCard>
            <QuickCardTitle>
              Change Password
            </QuickCardTitle>

            <QuickCardText>
              Update your account security
            </QuickCardText>
          </QuickCard>

        </QuickGrid>

      </WelcomeCard>

    </OverviewWrapper>
    </DashboardLayout>
  );
}

export default Overview;