const getHomePage = (req,res) => {
    res.send("Chao trung duc")
}

const getABC = (req, res) =>{
    res.send("Trung Duc Nguyen")
}

const getIamge = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getIamge
}