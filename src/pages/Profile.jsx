import React from "react";
import { useFormik } from "formik";

import DashboardLayout from "../components/DashboardLayout";

import {
  ProfileWrapper,
  ProfileCard,
  ProfileTitle,
  Sectionname,
  FormGrid,
  FormGroup,
  Label,
  Input,
  TextArea,
  ButtonRow,
  CancelButton,
  SaveButton,
  ErrorText,
} from "../theme/styled";

import ProfileSchema from "../validation/ProfileSchema";

function Profile() {

  const savedProfile =
    JSON.parse(
      localStorage.getItem("profileData")
    ) || {};

  const formik = useFormik({

    initialValues: {
      name:
        savedProfile.name ||
        "Demo User",

      dob:
        savedProfile.dob ||
        "",

      email:
        savedProfile.email ||
        "demo@gmail.com",

      phone:
        savedProfile.phone ||
        "+91 9876543210",

      address:
        savedProfile.address ||
        "",

      pin:
        savedProfile.pin ||
        "123456",

      city:
        savedProfile.city ||
        "Ranchi",

      country:
        savedProfile.country ||
        "India",

      github:
        savedProfile.github ||
        "https://github.com/username",
    },

    validationSchema: ProfileSchema,

    enableReinitialize: true,

    onSubmit: (values) => {

      localStorage.setItem(
        "profileData",
        JSON.stringify(values)
      );

    
      const loggedInUser =
        JSON.parse(
          localStorage.getItem("loggedInUser")
        );

      if (loggedInUser) {

        const updatedUser = {
          ...loggedInUser,
          name: values.name,
          email: values.email,
        };

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(updatedUser)
        );
      }

      alert(
        "Profile saved successfully!"
      );
    },
  });

  const handleCancel = () => {
    formik.resetForm();
  };

  return (
    <DashboardLayout>

      <ProfileWrapper>

        <ProfileCard>

          <ProfileTitle>
            Profile Settings
          </ProfileTitle>


          {/* PERSONAL INFORMATION */}

          <Sectionname>
            Personal Information
          </Sectionname>

          <form
            onSubmit={formik.handleSubmit}
          >

            <FormGrid>

              {/* NAME */}

              <FormGroup>

                <Label htmlFor="name">
                  Full Name
                </Label>

                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name &&
                  formik.errors.name && (
                    <ErrorText>
                      {formik.errors.name}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* DOB */}

              <FormGroup>

                <Label htmlFor="dob">
                  Date of Birth
                </Label>

                <Input
                  id="dob"
                  type="date"
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.dob &&
                  formik.errors.dob && (
                    <ErrorText>
                      {formik.errors.dob}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* EMAIL */}

              <FormGroup>

                <Label htmlFor="email">
                  Email Address
                </Label>

                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email &&
                  formik.errors.email && (
                    <ErrorText>
                      {formik.errors.email}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* PHONE */}

              <FormGroup>

                <Label htmlFor="phone">
                  Phone Number
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.phone &&
                  formik.errors.phone && (
                    <ErrorText>
                      {formik.errors.phone}
                    </ErrorText>
                  )}

              </FormGroup>

            </FormGrid>


            {/* ADDRESS */}

            <Sectionname>
              Address Information
            </Sectionname>

            <FormGroup>

              <Label htmlFor="address">
                Street Address
              </Label>

              <TextArea
                id="address"
                name="address"
                placeholder="Enter your complete address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.address &&
                formik.errors.address && (
                  <ErrorText>
                    {formik.errors.address}
                  </ErrorText>
                )}

            </FormGroup>


            <FormGrid>

              {/* PIN */}

              <FormGroup>

                <Label htmlFor="pin">
                  PIN Code
                </Label>

                <Input
                  id="pin"
                  type="text"
                  name="pin"
                  value={formik.values.pin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.pin &&
                  formik.errors.pin && (
                    <ErrorText>
                      {formik.errors.pin}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* CITY */}

              <FormGroup>

                <Label htmlFor="city">
                  City
                </Label>

                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.city &&
                  formik.errors.city && (
                    <ErrorText>
                      {formik.errors.city}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* COUNTRY */}

              <FormGroup>

                <Label htmlFor="country">
                  Country
                </Label>

                <Input
                  id="country"
                  type="text"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.country &&
                  formik.errors.country && (
                    <ErrorText>
                      {formik.errors.country}
                    </ErrorText>
                  )}

              </FormGroup>


              {/* GITHUB */}

              <FormGroup>

                <Label htmlFor="github">
                  GitHub Profile
                </Label>

                <Input
                  id="github"
                  type="url"
                  name="github"
                  value={formik.values.github}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.github &&
                  formik.errors.github && (
                    <ErrorText>
                      {formik.errors.github}
                    </ErrorText>
                  )}

              </FormGroup>

            </FormGrid>


            {/* BUTTONS */}

            <ButtonRow>

              <CancelButton
                type="button"
                onClick={handleCancel}
              >
                Cancel changes
              </CancelButton>

              <SaveButton
                type="submit"
                disabled={
                  formik.isSubmitting
                }
              >
                Save changes
              </SaveButton>

            </ButtonRow>

          </form>

        </ProfileCard>

      </ProfileWrapper>

    </DashboardLayout>
  );
}

export default Profile;