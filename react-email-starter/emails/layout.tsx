import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import endpoints from "../endpoints.json";

type Props = React.PropsWithChildren & {
  preview: string;
  name: string;
  uuid: string;
};

export const Layout = ({ children, uuid, preview }: Props) => {
  const unsubscribeUrl = new URL(
    process.env.NODE_ENV === "production"
      ? endpoints.unsubscribe.prod
      : endpoints.unsubscribe.dev
  );

  unsubscribeUrl.searchParams.append("uuid", uuid);

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Hr style={hr} />
            {children}
            <Text style={paragraph}>— The Newsletter team</Text>
            <Hr style={hr} />
            <Link href={unsubscribeUrl.toString()} style={unsubscribeLink}>
              Unsubscribe
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const unsubscribeLink = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textDecoration: "none",
  display: "block",
  marginTop: "20px",
  textAlign: "center" as const,
};

export default Layout;