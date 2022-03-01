const express = require("express");
const websitesUrlRoute = require("./routes/websitesUrl");
const error = require("./exceptions/urlError");
const app = express();

app.use(express.json());
// extra packages

// routes
app.use("/I/want/title", websitesUrlRoute);

// app.use(error);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
