

const express = require("express")
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require('./models/Slider');
const Service = require("./models/Service");

app.use(bodyParser.urlencoded({
    extended: true
}))


app.use('/static', express.static("public"))
app.use('', routes)


//template engine
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

//"mongodb://localhost:27017/ieiweb"
//db connections
mongoose.connect("mongodb://localhost:27017/ieiweb", () => {
    console.log("db connected")

    // Service.create([
    //     {
    //         icon: 'fab fa-500px',
    //         title: 'Engineering Profession3',
    //         description: '3IEI possesses the platform to practice as self-employed consultant in Engineering Profession in India and abroad. This',
    //         linkText: 'www.yahoo.com',
    //         link: 'Read..',
    //     }
    // ])

    // Slider.create([
    //     {
    //         title: 'learn java in very easy manner',
    //         subTitle: 'java is one of the most popular programming language.',
    //         imageUrl: "/static/images/s1.png"
    //     },
    //     {
    //         title: 'what is django',
    //         subTitle: 'django is powerful',
    //         imageUrl: "/static/images/s2.png"
    //     },
    //     {
    //         title: 'what is website',
    //         subTitle: 'it is used to show online presence',
    //         imageUrl: "/static/images/s3.png"
    //     },
    // ])


    // Detail.create({
    //     brandname: "The Institution of Engineers, Karnal(India)",
    //     brandIconUrl: "https://www.sandipuniversity.edu.in/images/iei.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },


    //         {
    //             label: "About Us",
    //             url: "/about-us"
    //         },
    //         {
    //             label: "Event",
    //             url: "/event"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Team",
    //             url: "/team"
    //         },

    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "Members",
    //             url: "/members"
    //         },

    //         {
    //             label: "Contact Us",
    //             url: "/contact-us"
    //         },

    //         {
    //             label: "IE-INDIA Downloads",
    //             url: "/downloads"
    //         }


    //     ]
    // })



})



app.listen(process.env.PORT | 5556, () => {
    console.log("server started");
});