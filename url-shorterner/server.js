const express= require('express')
const app = express()//creating object
const mongoose = require('mongoose')
const ShortUrl= require('./models/shortUrl')
//const ShortUrl=mongoose.model("ShortUrl")

mongoose.connect('mongodb://localhost/urlShortener',{useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs'),//setting view engine to ejs
app.use(express.urlencoded({ extended: true })),

app.get('/',async (req,res)=>{
  //  const shortUrls = await ShortUrl.find()
res.render('index.ejs')//{ shortUrls: shortUrls })
}),

app.post('/shortUrls', async (req,res)=>{
 await ShortUrl.create({ full: req.body.fullUrl })

 res.redirect('/')
}),

/*app.get('/:shortUrl', async (req,res)=>{
    const shortUrl= await ShortUrl.findOne({short: req.params.shortUrl})
    if(shortUrl==null) return res.sendStatus(404)
    
    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)

}),*/

app.listen(process.env.PORT || 5000,()=>{//process env to dynamically set port
    console.log('server has started')
});