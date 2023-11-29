const midlwareLogs = (req, res, next) => {
    console.log("terjadi reuest ke PATH: ", req.path);
    next();
};

module.exports = midlwareLogs;