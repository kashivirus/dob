const express = require('express');
const moment = require('moment');

const app = express();

app.get('/age/:dob', (req, res) => {
    const dob = moment(req.params.dob, 'DD-MM-YYYY');
    const age = moment().diff(dob, 'years');

    res.json({
        age: age,
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
