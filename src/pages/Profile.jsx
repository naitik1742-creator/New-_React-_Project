import React, { useState } from "react";
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
} from "../theme/styled";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Demo User",
    dob: "",
    email: "demo@gmail.com",
    phone: "+91 9876543210",
    address: "",
    pin: "123456",
    city: "Ranchi",
    country: "India",
    github: "https://github.com/username",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "profileData",
      JSON.stringify(profile)
    );

    alert("Profile saved successfully!");
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <DashboardLayout>
    <ProfileWrapper>
      <ProfileCard>

        <ProfileTitle>
          Profile Settings
        </ProfileTitle>

        
        <Sectionname>
          Personal Information
        </Sectionname>

        <FormGrid>

          <FormGroup>
            <Label>Full Name</Label>

            <Input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Date of Birth</Label>

            <Input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email Address</Label>

            <Input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone Number</Label>

            <Input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </FormGroup>

        </FormGrid>

        
        <Sectionname>
          Address Information
        </Sectionname>

        <FormGroup>
          <Label>Street Address</Label>

          <TextArea
            name="address"
            placeholder="Enter your complete address"
            value={profile.address}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGrid>

          <FormGroup>
            <Label>PIN Code</Label>

            <Input
              type="text"
              name="pin"
              value={profile.pin}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>City</Label>

            <Input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Country</Label>

            <Input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>GitHub Profile</Label>

            <Input
              type="url"
              name="github"
              value={profile.github}
              onChange={handleChange}
            />
          </FormGroup>

        </FormGrid>

        
        <ButtonRow>

          <CancelButton
            type="button"
            onClick={handleCancel}
          >
            Cancel changes
          </CancelButton>

          <SaveButton
            type="button"
            onClick={handleSave}
          >
            Save changes
          </SaveButton>

        </ButtonRow>

      </ProfileCard>
    </ProfileWrapper>

    </DashboardLayout>
  );
}

export default Profile;