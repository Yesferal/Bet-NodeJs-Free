import express from "express";

const PORT = process.env.PORT || ''


/**
 *  Express Configuration
 */
const app = express();
app.use(express.json());


/**
 * Setup the endpoints
 */
app.get('/', (req, res) => { return res.send('Hello, I am alive'); });


/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  