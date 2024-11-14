import { Button, Heading, Text } from "@react-email/components";
import * as React from "react";
import { Layout } from "./layout";
import { NewsletterBody } from "../validators";

export const Newsletter = ({ name, uuid, link, summery }: NewsletterBody) => {
  const welcomePreview = "Welcome to the Newsletter!";
  return (
    <Layout preview={welcomePreview} name={name} uuid={uuid}>
      <Heading style={heading}>New article</Heading>
      <Text style={paragraph}>{summery}</Text>
      <Button style={button} href={link}>
        View The Article
      </Button>
    </Layout>
  );
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
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

export default Newsletter;
