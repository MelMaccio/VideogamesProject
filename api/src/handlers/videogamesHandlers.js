//handlers -> fx que manejan mis requests y mis responses

const getVideogamesHandler = (req, res) => {
    const { name } = req.query;

    if(name !== undefined) {
        res.status(200).send(`NIY: this route get videogames with name ${name}`)
    }

    res.status(200).send('NIY: this route get all videogames/ query search videogames')
};

const getDetailHandler = (req, res) => {
    const { id } = req.params; 
    res.status(200).send(`NIY: this route get a specific videgame details with id {id}`)
};

const postVidegoameHandler = (req, res) => {
    const {name, description, patforms, image, date, rating} = req.body;
    res.status(200).send(`NIY: this route create a new videogame with name: ${name}, descrption: ${description}, etc`)
};


module.exports = {
    getVideogamesHandler,
    getDetailHandler,
    postVidegoameHandler
}