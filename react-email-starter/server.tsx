import React from "react";
import express, { Request, Response } from "express";
import { render } from "@react-email/render";
import { NotionMagicLinkEmail } from "./emails/notion-magic-link";
import { PlaidVerifyIdentityEmail } from "./emails/plaid-verify-identity";
import bodyParser from "body-parser";
import { bodySchema } from "./validators";

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());

app.post("/", async (req: Request, res: Response) => {
  try {
    const body = bodySchema.parse(req.body);

    if (body.template == "welcome") {
      const html = await render(<NotionMagicLinkEmail {...body} />);
      res.json({ html });
    }

    if (body.template == "newsletter") {
      const html = await render(<PlaidVerifyIdentityEmail {...body} />);
      res.json({ html });
    }
  } catch (error) {
    res.status(400).send(error.errors);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
