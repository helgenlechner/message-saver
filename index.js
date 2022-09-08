const express = require('express');
const cors = require('cors');
const { writeFileSync } = require('fs');

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.post('/:locale/:themeUid/:buildTarget', (req, res) => {
    const { locale, themeUid, buildTarget } = req.params;

    writeFileSync(`branch/${themeUid}-${buildTarget}-${locale}.json`, JSON.stringify(req.body));

    res.send('Saved');
});

app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`);
});
