module.exports = (req,res,next) => {
    if (req.body.text){
        req.body.text = encodeURIComponent(req.body.text);
        next();
    }
    else{
        return res.status(400).json({erreur : "Pas de texte"});
    }
}