let places = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        const {city} = req.body;
        places.push({city});
        id++;
        res.status(200).send(places);
    },

    read: (req,res) => {
        res.status(200).send(places);
    }
}