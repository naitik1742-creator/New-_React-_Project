import React, { useState } from "react";
import { useFormik } from "formik";

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
  ErrorText,
} from "../theme/styled";

import SecuritySchema from "../validation/SecuritySchema";

function Security() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: SecuritySchema,

    onSubmit: (values, { resetForm }) => {
      setMessage("");
      setErrorMessage("");

      const loggedInUser =
        JSON.parse(
          localStorage.getItem("loggedInUser")
        ) || null;

      if (!loggedInUser) {
        setErrorMessage(
          "No logged-in user found."
        );
        return;
      }

      if (
        loggedInUser.password !==
        values.currentPassword
      ) {
        setErrorMessage(
          "Current password is incorrect."
        );
        return;
      }

      if (
        values.currentPassword ===
        values.newPassword
      ) {
        setErrorMessage(
          "New password must be different from current password."
        );
        return;
      }

      const updatedUser = {
        ...loggedInUser,
        password: values.newPassword,
      };

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(updatedUser)
      );

      const registeredUsers =
        JSON.parse(
          localStorage.getItem("registeredUsers")
        ) || [];

      const updatedUsers =
        registeredUsers.map((user) => {
          if (
            user.email.toLowerCase() ===
            loggedInUser.email.toLowerCase()
          ) {
            return {
              ...user,
              password: values.newPassword,
            };
          }

          return user;
        });

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(updatedUsers)
      );

      setMessage(
        "Password updated successfully."
      );

      resetForm();
    },
  });

  const handleClear = () => {
    formik.resetForm();
    setMessage("");
    setErrorMessage("");
  };

  return (
    <DashboardLayout>
      <SecurityPageCard>

        <SecurityPageTitle>
          Security Settings
        </SecurityPageTitle>

        <SecurityIntroTitle>
          Security Settings
        </SecurityIntroTitle>

        <SecurityDescription>
          Keep your account secure by using a strong
          password and changing it regularly.
        </SecurityDescription>

        <form onSubmit={formik.handleSubmit}>

          <SecurityFormGrid>

            <SecurityField>
              <SecurityLabel htmlFor="currentPassword">
                Current Password
              </SecurityLabel>

              <SecurityInput
                id="currentPassword"
                name="currentPassword"
                type="password"
                placeholder="Enter current password"
                value={
                  formik.values.currentPassword
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.currentPassword &&
                formik.errors.currentPassword && (
                  <ErrorText>
                    {formik.errors.currentPassword}
                  </ErrorText>
                )}
            </SecurityField>


            <SecurityField>
              <SecurityLabel htmlFor="newPassword">
                New Password
              </SecurityLabel>

              <SecurityInput
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Minimum 8 characters"
                value={
                  formik.values.newPassword
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.newPassword &&
                formik.errors.newPassword && (
                  <ErrorText>
                    {formik.errors.newPassword}
                  </ErrorText>
                )}
            </SecurityField>


            <SecurityField className="security-full-width">
              <SecurityLabel htmlFor="confirmPassword">
                Confirm New Password
              </SecurityLabel>

              <SecurityInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter new password"
                value={
                  formik.values.confirmPassword
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <ErrorText>
                    {formik.errors.confirmPassword}
                  </ErrorText>
                )}
            </SecurityField>

          </SecurityFormGrid>


          {errorMessage && (
            <ErrorText>
              {errorMessage}
            </ErrorText>
          )}

          {message && (
            <div
              style={{
                marginTop: "15px",
                color: "#22a39f",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {message}
            </div>
          )}


          <SecurityButtonRow>

            <SecurityClearButton
              type="button"
              onClick={handleClear}
            >
              Clear
            </SecurityClearButton>

            <SecurityUpdateButton
              type="submit"
              disabled={formik.isSubmitting}
            >
              Update Password
            </SecurityUpdateButton>

          </SecurityButtonRow>

        </form>


        <SecurityInfoSection>

          <SecurityInfoTitle>
            Security Information
          </SecurityInfoTitle>

          <SecurityInfoGrid>

            <SecurityInfoCard>
              <SecurityInfoIcon>
                ▣
              </SecurityInfoIcon>

              <SecurityInfoCardTitle>
                Account Created
              </SecurityInfoCardTitle>

              <SecurityInfoText>
                8/31/2025
              </SecurityInfoText>
            </SecurityInfoCard>


            <SecurityInfoCard>
              <SecurityInfoIcon>
                ▣
              </SecurityInfoIcon>

              <SecurityInfoCardTitle>
                Last Updated
              </SecurityInfoCardTitle>

              <SecurityInfoText>
                Password updated
              </SecurityInfoText>
            </SecurityInfoCard>


            <SecurityInfoCard>
              <SecurityInfoIcon>
                ▣
              </SecurityInfoIcon>

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