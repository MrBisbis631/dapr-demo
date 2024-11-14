# Newsletter with Microservices Architecture

## Frontend

We use vanilla JavaScript to create a simple frontend that will consume the backend API.

### Pages

- `index.html`: Home page with a form to subscribe to the newsletter.
- `unsubscribe.html`: Unsubscribe page with a form to unsubscribe from the newsletter.
- `thanks.html`: Thank you page after subscribing or unsubscribing.
- `see-you-soon.html`: Page to show when the user unsubscribed.

### Technologies

- HTML
- CSS (Tailwind CSS)
- `Alpine.js` for fetching `Categories` from the backend API and managing development & production endpoints.
- `json-server` to mock the backend API.

### How to run (Development)

- Clone the repository
- go to the `frontend` directory with `cd frontend`
- Run a local server with `npm run dev`

This will start a local server at `http://localhost:8080/categories` to fetch the categories from the backend API.
The application will be available at `http://localhost:5173/pages/<see the pages above>`.

**Note**: You can test your real endpoints by running `npm run preview`.

### Deployment

Using `docker-compose`, the build will go to the `nginx` volume in `/static` folder. Internally, the `nginx` will serve the static files.


## Mail builder 

We  use a simple `Node.js` application to render mails with `react-mail`.

### Technologies

- Node.js
- React
- `react-mail` to render the mail template.

### How to run (Development)

- Clone the repository
- cd to `react-mail-starter` directory using `cd react-mail-starter`
- Run `npm install`
- Run `npm run dev` 
- Open `http://localhost:3000` to see the rendered mail template.

### Test Docker-compose build

- Run `docker-compose up --build` to build the image and run the container.
- use CURL to test the rendered mail template.

```bash
curl -X POST http://localhost:8081 \
-H "Content-Type: application/json" \
-d '{ 
  "name": "John Doe",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "template": "newsletter",
  "summery": "This is a summary of the newsletter.",
  "link": "https://example.com"
}'
```
