let http=require("http")

let ourApp=http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("Hellow, welcome to home page.")
    }
    if(req.url=="/about")
    {
        res.end("thank for your interest in our comapany")
    }
    res.end("we cann't find the page ur looking for!!!!")
})
ourApp.listen(3000)