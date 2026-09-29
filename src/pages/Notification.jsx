import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";




import {
  ProfileCard,
  ProfileTitle,
  S1Title,
  NotificationGrid,
  NotificationBox,
  NotificationIcon,
  NotificationTitle,
  NotificationText,
  CheckboxRow,
  ActivityBox,
} from "../theme/styled";

function Notification() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [securityAlert, setSecurityAlert] = useState(true);
  const [profileUpdated, setProfileUpdated] = useState(true);

  return (

            <DashboardLayout>

    <ProfileCard>
      <ProfileTitle>
        Notifications
      </ProfileTitle>

      <S1Title>
        🔔 Notification Preferences
      </S1Title>

      <p>
        Manage how and when you receive notifications about your account
        activity.
      </p>

      <NotificationGrid>

        
        <NotificationBox>
          <NotificationIcon>✉</NotificationIcon>

          <NotificationTitle>
            Email Notifications
          </NotificationTitle>

          <NotificationText>
            Receive important updates via email
          </NotificationText>

          <CheckboxRow>
            <input
              type="checkbox"
              checked={emailNotification}
              onChange={(e) =>
                setEmailNotification(e.target.checked)
              }
            />

            <span>
              Enable email notifications
            </span>
          </CheckboxRow>
        </NotificationBox>

        
        <NotificationBox>
          <NotificationIcon>🔒</NotificationIcon>

          <NotificationTitle>
            Security Alerts
          </NotificationTitle>

          <NotificationText>
            Get notified about security changes
          </NotificationText>

          <CheckboxRow>
            <input
              type="checkbox"
              checked={securityAlert}
              onChange={(e) =>
                setSecurityAlert(e.target.checked)
              }
            />

            <span>
              Enable security alerts
            </span>
          </CheckboxRow>
        </NotificationBox>

      </NotificationGrid>

      {/* RECENT ACTIVITY */}

      <S1Title>
        ▤ Recent Activity
      </S1Title>

      <ActivityBox>

        
        <CheckboxRow>
          <input
            type="checkbox"
            checked={profileUpdated}
            onChange={(e) =>
              setProfileUpdated(e.target.checked)
            }
          />

          <NotificationTitle>
            Profile Updated
          </NotificationTitle>
        </CheckboxRow>

        <NotificationText>
          Your profile information was successfully updated
        </NotificationText>

        <NotificationText>
          Today
        </NotificationText>

      </ActivityBox>

    </ProfileCard>

    </DashboardLayout>
  );
}

export default Notification;