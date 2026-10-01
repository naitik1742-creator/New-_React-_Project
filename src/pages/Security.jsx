import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";



import {
  SecurityPageCard,
  SecurityPageTitle,
  SecurityIntroTitle,
  SecurityDescription,
  SecurityFormGrid,
  SecurityField,
  SecurityLabel,
  SecurityInput,
  SecurityButtonRow,
  SecurityClearButton,
  SecurityUpdateButton,
  SecurityInfoSection,
  SecurityInfoTitle,
  SecurityInfoGrid,
  SecurityInfoCard,
  SecurityInfoIcon,
  SecurityInfoCardTitle,
  SecurityInfoText,
} from "../theme/styled";

function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClear = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password updated successfully.");
  };

  return (

    <DashboardLayout>
    <SecurityPageCard>
      <SecurityPageTitle>Security Settings</SecurityPageTitle>

      <SecurityIntroTitle>Security Settings</SecurityIntroTitle>

      <SecurityDescription>
        Keep your account secure by using a strong password and changing it
        regularly.
      </SecurityDescription>

      <form onSubmit={handleUpdate}>
        <SecurityFormGrid>
          {/* CURRENT PASSWORD */}
          <SecurityField>
            <SecurityLabel>Current Password</SecurityLabel>

            <SecurityInput
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </SecurityField>

          {/* NEW PASSWORD */}
          <SecurityField>
            <SecurityLabel>New Password</SecurityLabel>

            <SecurityInput
              type="password"
              placeholder="Minimum 6 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </SecurityField>

          {/* CONFIRM PASSWORD */}
          <SecurityField className="security-full-width">
            <SecurityLabel>Confirm New Password</SecurityLabel>

            <SecurityInput
              type="password"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </SecurityField>
        </SecurityFormGrid>

        <SecurityButtonRow>
          <SecurityClearButton type="button" onClick={handleClear}>
            Clear
          </SecurityClearButton>

          <SecurityUpdateButton type="submit">
            Update Password
          </SecurityUpdateButton>
        </SecurityButtonRow>
      </form>

      {/* SECURITY INFORMATION */}
      <SecurityInfoSection>
        <SecurityInfoTitle>Security Information</SecurityInfoTitle>

        <SecurityInfoGrid>
          <SecurityInfoCard>
            <SecurityInfoIcon>▣</SecurityInfoIcon>

            <SecurityInfoCardTitle>
              Account Created
            </SecurityInfoCardTitle>

            <SecurityInfoText>
              8/31/2025
            </SecurityInfoText>
          </SecurityInfoCard>

          <SecurityInfoCard>
            <SecurityInfoIcon>▣</SecurityInfoIcon>

            <SecurityInfoCardTitle>
              Last Updated
            </SecurityInfoCardTitle>

            <SecurityInfoText>
              Never updated
            </SecurityInfoText>
          </SecurityInfoCard>

          <SecurityInfoCard>
            <SecurityInfoIcon>▣</SecurityInfoIcon>

            <SecurityInfoCardTitle>
              Session
            </SecurityInfoCardTitle>

            <SecurityInfoText>
              Current browser session active
            </SecurityInfoText>
          </SecurityInfoCard>
        </SecurityInfoGrid>
      </SecurityInfoSection>
    </SecurityPageCard>

    </DashboardLayout>
  );
}

export default Security;