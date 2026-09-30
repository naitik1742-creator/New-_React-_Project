import React from "react";
import DashboardLayout from "../components/DashboardLayout";

import {
  PageContent,
  ContentCard,
  PageTitle,
  STitle,
  SectionIcon,
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  SupportSection,
  SupportTitle,
  SupportText,
} from "../theme/styled";

const HelpSupport = () => {
  return (

        <DashboardLayout>

    <PageContent>
      <ContentCard>
        <PageTitle>Help & Support</PageTitle>

        <STitle>
          <SectionIcon>?</SectionIcon>
          Frequently Asked Questions
        </STitle>

        <FAQContainer>
          <FAQItem>
            <FAQQuestion>How do I update my profile?</FAQQuestion>
            <FAQAnswer>
              Click on "Profile Settings" in the sidebar to edit your personal
              information, address, and other details.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Is my data secure?</FAQQuestion>
            <FAQAnswer>
              This is a demo application that stores data in your browser's
              localStorage. In a production app, data would be encrypted and
              stored securely on servers.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>How do I change my password?</FAQQuestion>
            <FAQAnswer>
              Go to "Security" in the sidebar, enter your current password,
              then set and confirm your new password.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>

        <SupportSection>
          <SupportTitle>
            <SectionIcon>⌕</SectionIcon>
            Contact Support
          </SupportTitle>

          <SupportText>
            This is a demonstration application for learning web development.
            In a real application, you would find contact information and
            support options here.
          </SupportText>
        </SupportSection>
      </ContentCard>
    </PageContent>

        </DashboardLayout>

  );
};

export default HelpSupport;