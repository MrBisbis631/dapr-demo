import React from "react";
import express, { Request, Response } from "express";
import { render } from "@react-email/render";
import { Newsletter } from "./emails/newsletter";
import { Welcome } from "./emails/welcome";
import bodyParser from "body-parser";
import { bodySchema } from "./validators";

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());

app.post("/", async (req: Request, res: Response) => {
  try {
    const body = bodySchema.parse(req.body);

    let Component = null;

    if (body.template == "welcome") {
      Component = Welcome;
    }

    if (body.template == "newsletter") {
      Component = Newsletter;
    }

    const html = await render(<Component {...body} />, { pretty: true });
    const plain = await render(<Component {...body} />, { plainText: true });
    res.json({ html, plain });
  } catch (error) {
    res.status(400).send(error.errors);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
