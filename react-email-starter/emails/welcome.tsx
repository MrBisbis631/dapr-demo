import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { Layout } from "./layout";
import { WelcomeBody } from "../validators";

export const Welcome = ({ name, uuid }: WelcomeBody) => {
  const welcomePreview = "Welcome to the Newsletter!";
  return (
    <Layout preview={welcomePreview} name={name} uuid={uuid}>
      <Heading style={heading}>Welcome to the Newsletter!</Heading>
      <Text style={paragraph}>
        Thank you for subscribing to the newsletter, {name}!
      </Text>
      <Text style={paragraph}>
        We'll be sending you the latest news and updates from the world of tech.
      </Text>
    </Layout>
  );
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const heading = {
  color: "#32325d",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "30px",
  textAlign: "left" as const,
};

export default Welcome;
