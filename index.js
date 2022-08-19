url = "http://api.tirajo.website/api-docs-json"

let surname = document.querySelector("#surname")
let othername = document.querySelector("#othername")

let gender = document.querySelector("#gender")

let maritalStatus  = document.querySelector("#marital-status")

let passportNumber = document.querySelector("#passport-number")
let passportId = document.querySelector("#passport-id")

let dob = document.querySelector("#dob")

let nationality = document.querySelector("#nationality")

let village = document.querySelector("#village")

let subcounty = document.querySelector("#subcounty")

let parish = document.querySelector("#parish")
let district  = document.querySelector("#district")

let btn = document.querySelector("#next")

// second page
let fathersname = document.querySelector("#fathersname")

let fathersVillage = document.querySelector("#fathers-village")

let fathersParish = document.querySelector("#fathers-parish")

let fathersSubcounty = document.querySelector("#fathers-subcounty")

let fathersDistrict  = document.querySelector("#fathers-district")

let fathersNationality = document.querySelector("#fathers-nationality")

let fathersTown = document.querySelector("#fathers-town")

let fathersStreet = document.querySelector("#fathers-street")

let fathersPlot = document.querySelector("#fathers-plot")


// third page

let mothersname = document.querySelector("#mothersname")

let mothersVillage = document.querySelector("#mothers-village")

let mothersParish = document.querySelector("#mothers-parish")

let mothersSubcounty = document.querySelector("#mothers-subcounty")

let mothersDistrict  = document.querySelector("#mothers-district")

let mothersNationality = document.querySelector("#mothers-nationality")

let mothersTown = document.querySelector("#mothers-town")

let mothersStreet = document.querySelector("#mothers-street")

let mothersPlot = document.querySelector("#mothers-plot")

// page four
let institution1 = document.querySelector("#institution-name1")
let period1 = document.querySelector("#period-1")
let qualification1 = document.querySelector("#qualification-1")

let institution2 = document.querySelector("#institution-name2")
let period2 = document.querySelector("#period-2")
let qualification2 = document.querySelector("#qualification-2")


let institution3 = document.querySelector("#institution-name3")
let period3 = document.querySelector("#period-3")
let qualification3 = document.querySelector("#qualification-3")


let institution4 = document.querySelector("#institution-name4")
let period4 = document.querySelector("#period-4")
let qualification4 = document.querySelector("#qualification-4")


let institution5 = document.querySelector("#institution-name5")
let period5 = document.querySelector("#period-5")
let qualification5 = document.querySelector("#qualification-5")


let institution6 = document.querySelector("#institution-name6")
let period6 = document.querySelector("#period-6")
let qualification6 = document.querySelector("#qualification-6")


let institution7 = document.querySelector("#institution-name7")
let period7 = document.querySelector("#period-7")
let qualification7 = document.querySelector("#qualification-7")

//page 5
let institutionName1 = document.querySelector("#institution-1")
let address1 = document.querySelector("#address-1")
let appointment1 = document.querySelector("#appointment-1")
let duration1 = document.querySelector("#duration-1")

let institutionName2 = document.querySelector("#institution-2")
let address2 = document.querySelector("#address-2")
let appointment2 = document.querySelector("#appointment-2")
let duration2 = document.querySelector("#duration-2")


let institutionName3 = document.querySelector("#institution-3")
let address3 = document.querySelector("#address-3")
let appointment3 = document.querySelector("#appointment-3")
let duration3 = document.querySelector("#duration-3")


let institutionName4 = document.querySelector("#institution-4")
let address4 = document.querySelector("#address-4")
let appointment4 = document.querySelector("#appointment-4")
let duration4 = document.querySelector("#duration-4")


let institutionName5 = document.querySelector("#institution-5")
let address5 = document.querySelector("#address-5")
let appointment5 = document.querySelector("#appointment-5")
let duration5 = document.querySelector("#duration-5")


let institutionName6 = document.querySelector("#institution-6")
let address6 = document.querySelector("#address-6")
let appointment6 = document.querySelector("#appointment-6")
let duration6 = document.querySelector("#duration-6")


let institutionName7 = document.querySelector("#institution-7")
let address7 = document.querySelector("#address-7")
let appointment7 = document.querySelector("#appointment-7")
let duration7 = document.querySelector("#duration-7")

//page 6
let course1 = document.querySelector("#course-1")
let institution8 = document.querySelector("#address-8")
let duration8 = document.querySelector("#duration-8")

let course2 = document.querySelector("#course-2")
let institution9 = document.querySelector("#address-9")
let duration9 = document.querySelector("#duration-9")

let course3 = document.querySelector("#course-3")
let institution10 = document.querySelector("#address-10")
let duration10 = document.querySelector("#duration-10")

let course4 = document.querySelector("#course-4")
let institution11 = document.querySelector("#address-11")
let duration11 = document.querySelector("#duration-11")

let course5 = document.querySelector("#course-5")
let institution12 = document.querySelector("#address-12")
let duration12 = document.querySelector("#duration-12")

let course6 = document.querySelector("#course-1")
let institution13 = document.querySelector("#address-13")
let duration13 = document.querySelector("#duration-13")

let course7 = document.querySelector("#course-1")
let institution14 = document.querySelector("#address-14")
let duration14 = document.querySelector("#duration-14")

// page seven
let message1 = document.querySelector("#message1")
let message2 = document.querySelector("#message2")
let message3 = document.querySelector("#message3")
let message4 = document.querySelector("#message4")

// page eight

let message5 = document.querySelector("#message5")
let message6 = document.querySelector("#message6")
let message7 = document.querySelector("#message7")
let message8 = document.querySelector("#message8")
let message9 = document.querySelector("#message9")



fetch(url,
    {
        method:"POST",
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
           }
    }).then(
    (res)=>{
        return res.json()
    }
).then(data=>{
    console.log(data);
})

