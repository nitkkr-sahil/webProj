const { response } = require("express")
const express = require("express")
const { route } = require('express/lib/application')
const async = require("hbs/lib/async")
const Contact = require("../models/Contact")


const Detail = require("../models/Detail")
const Service = require("../models/Service")
const Slider = require("../models/Slider")

const routes = express.Router()

routes.get("/", async (req, res) => {

    const details = await Detail.findById({ "_id": "626ce2073806108e035dd26e" })
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(details);
    // console.log(slides);
    res.render("index", {
        details: details,
        slides: slides,
        services: services
    })
})




routes.get("/gallery", async (req, res) => {
    const details = await Detail.findById({ "_id": "626ce2073806108e035dd26e" })
    const slides = await Slider.find()
    res.render("gallery", {
        details: details,
        slides: slides
    })
})

//process contact form
routes.post("/process-contact-form", async (request, response) => {
    console.log(request.body);
    //saving data to db
    try {
        const data = await Contact.create(request.body)
        response.redirect("/")

    } catch (e) {
        console.log(e)
        response.redirect("/")
    }

})


module.exports = routes