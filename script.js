// pointers to html elements
const aboutPage = $("#about-page");
const portfolioPage = $("#portfolio-page");
const contactPage = $("#contact-me");

// pointers to my nav bar links
const aboutLink = $("#nav-link-about");
const portfolioLink = $("#nav-link-portfolio");
const contactLink = $("#nav-link-contact");

// display "about me" page first
displayAboutPage();

// about me page button
aboutLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayAboutPage();
});

// portfolio page button
portfolioLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayPortfolioPage();
});

// contact page button
contactLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayContactPage();
});

// about me page function
function displayAboutPage() {
    // page header
    document.getElementById("nav-item-about").className = "nav-item active";
    document.getElementById("nav-item-portfolio").className = "nav-item";
    document.getElementById("nav-item-contact").className = "nav-item";
    const aboutMeRow1 = $("<div>").addClass("row").appendTo(aboutPage);
    const aboutMeCol = $("<div>").addClass("col-md-3").appendTo(aboutMeRow1);
    const aboutMeText = $("<h1>").text("About Me").appendTo(aboutMeCol);

    // about me block
    const aboutMeRow2 = $("<div>").addClass("row").appendTo(aboutPage);
    const welcomeTextCol = $("<div>").addClass("col-md-7").appendTo(aboutMeRow2);
    const welcomeTextBodyP1 = $("<p>").text("Welcome to my page! My name is Danny Hoover. My favorite things include being a dad, playing video games, and listening to audiobooks. In my picture you'll see my amazing wife Ashley and our daughter Emma. These two are my world.").appendTo(welcomeTextCol);
    const welcomeTextBodyP2 = $("<p>").text("I have a bachelors degree in Sociology from the University of Oregon, my background is in finance and logistics, and current events have led me to pursue a career in coding!").appendTo(welcomeTextCol);
    const welcomeTextBodyP3 = $("<p>").text("Here you'll find some of my projects resulting from this new endeavor!").appendTo(welcomeTextCol);
    const welcomeTextBodyP4 = $("<p>").text("My Links:").appendTo(welcomeTextCol);
    const welcomeTextBodyP5 = $("<p>").appendTo(welcomeTextCol);
    const myGithubLink = $("<a>Github</a>").attr("href", "https://github.com/dannyhoover").attr("target", "_blank").appendTo(welcomeTextBodyP5);
    const welcomeTextBodyP6 = $("<p>").appendTo(welcomeTextCol);
    const myLinkedInLink = $("<a>LinkedIn</a>").attr("href", "https://www.linkedin.com/in/daniel-hoover-269278172/").attr("target", "_blank").appendTo(welcomeTextBodyP6);

    // picture block
    const famPicDiv = $("<div>").addClass("col-md-5").appendTo(aboutMeRow2);
    const famPicture = $("<img>").attr("src", "https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/60346112_10219121352135738_9049716716552060928_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=hCW4q79rW04AX_pD-R3&_nc_ht=scontent.fhio2-1.fna&oh=9f2421e530d25db74922a5da3e3a920a&oe=5F7241D0").attr("alt", "thumbnail").addClass("img-thumbnail").appendTo(famPicDiv);
}

// portfolio page function
function displayPortfolioPage() {
    // page header update
    document.getElementById("nav-item-about").className = "nav-item";
    document.getElementById("nav-item-portfolio").className = "nav-item active";
    document.getElementById("nav-item-contact").className = "nav-item";

    // jumbotron for the top of the page underneath header
    const jumbotronDisplay = $("<div>").addClass("jumbotron jumbotron-fluid").appendTo(portfolioPage);
    const jumboContainer = $("<div>").addClass("container").appendTo(jumbotronDisplay);
    const jumboText1 = $("<h1>").addClass("display-6").text("My Portfolio").appendTo(jumboContainer);
    const jumboText2 = $("<p>").addClass("lead").text("These are a few of my works so far. Click the images to take a look!").appendTo(jumboContainer);

    // container for all portfolio items
    const portfolioContainer = $("<div>").addClass("container").appendTo(portfolioPage);

    // row 1 containing first two items
    const portfolioRow1 = $("<div>").addClass("row").appendTo(portfolioContainer);

    // item 1
    const portfolioCol1 = $("<div>").addClass("col-md-6").appendTo(portfolioRow1);
    const portfolioItem1 = $("<div>").addClass("media").appendTo(portfolioCol1);
    const portfolioLink1 = $("<a>").attr("href", "https://jackryansmith.github.io/Group-work/").attr("src", "./assets/group-project-img.jpg").attr("target", "_blank").appendTo(portfolioItem1);
    const portfolioPic1 = $("<img>").addClass("mr-3 border").attr("alt", "My Sports Page").appendTo(portfolioLink1);
    const portfolioItemBody1 = $("<div>My Sports Page</div>").addClass("item-header").appendTo(portfolioItem1);
    const portfolioItemText1 = $("<h5>").addClass("item-text").text("This was my first group project. My team came up with the idea for a sports info web app that called on iSports API to return local sports data.").appendTo(portfolioItemBody1);

    // item 2
    const portfolioCol2 = $("<div>").addClass("col-md-6").appendTo(portfolioRow1);
    const portfolioItem2 = $("<div>").addClass("media").appendTo(portfolioCol2);
    const portfolioLink2 = $("<a>").attr("href", "https://dannyhoover.github.io/Weather-Dashboard/").attr("src", "...").attr("target", "_blank").appendTo(portfolioItem2);
    const portfolioPic2 = $("<img>").addClass("mr-3 border").attr("alt", "Weather App").appendTo(portfolioLink2);
    const portfolioItemBody2 = $("<div>Weather App</div>").addClass("item-header").appendTo(portfolioItem2);
    const portfolioItemText2 = $("<h5>").addClass("item-text").text("This was a homework assignment where I called on the OpenWeather API to display current weather data and display a five day forecast of a city of the user's choice.").appendTo(portfolioItemBody2);

    // row 2 containing next two items
    const portfolioRow2 = $("<div>").addClass("row").appendTo(portfolioContainer);

    // item 3
    const portfolioCol3 = $("<div>").addClass("col-md-6").appendTo(portfolioRow2);
    const portfolioItem3 = $("<div>").addClass("media").appendTo(portfolioCol3);
    const portfolioLink3 = $("<a>").attr("href", "https://dannyhoover.github.io/Calendar/02-Homework/Develop/").attr("src", "...").attr("target", "_blank").appendTo(portfolioItem3);
    const portfolioPic3 = $("<img>").addClass("mr-3 border").attr("alt", "Calendar App").appendTo(portfolioLink3);
    const portfolioItemBody3 = $("<div>Calendar App</div>").addClass("item-header").appendTo(portfolioItem3);
    const portfolioItemText3 = $("<h5>").addClass("item-text").text("This calendar app lets the user put in data for each hour of the day and save the whole schedule.").appendTo(portfolioItemBody3);

    // item 4
    const portfolioCol4 = $("<div>").addClass("col-md-6").appendTo(portfolioRow2);
    const portfolioItem4 = $("<div>").addClass("media").appendTo(portfolioCol4);
    const portfolioLink4 = $("<a>").attr("href", "https://dannyhoover.github.io/Homework3/").attr("src", "...").attr("target", "_blank").appendTo(portfolioItem4);
    const portfolioPic4 = $("<img>").addClass("mr-3 border").attr("alt", "Password Generator").appendTo(portfolioLink4);
    const portfolioItemBody4 = $("<div>Password Generator</div>").addClass("item-header").appendTo(portfolioItem4);
    const portfolioItemText4 = $("<h5>").addClass("item-text").text("Generate a random password! Pick your characters, case, and length.").appendTo(portfolioItemBody4);

    // // row 3 containing final two items
    // const portfolioRow3 = $("<div>").addClass("row").appendTo(portfolioContainer);
    // // item 5
    // const portfolioCol5 = $("<div>").addClass("col-md-6").appendTo(portfolioRow3);
    // const portfolioItem5 = $("<div>").addClass("media").appendTo(portfolioCol5);
    // const portfolioLink5 = $("<a>").attr("href", "https://jackryansmith.github.io/Group-work/").attr("src", "...").attr("target", "_blank").appendTo(portfolioItem5);
    // const portfolioPic5 = $("<img>").addClass("mr-3 border").attr("alt", "My Sports Page").appendTo(portfolioLink5);
    // const portfolioItemBody5 = $("<div>My Sports Page</div>").addClass("item-header").appendTo(portfolioItem5);
    // const portfolioItemText5 = $("<h5>").addClass("item-text").text("This was my first group project. My team came up with the idea for a sports info web app that called on iSports API to return local sports data.").appendTo(portfolioItemBody5);
    // // item 6
    // const portfolioCol6 = $("<div>").addClass("col-md-6").appendTo(portfolioRow3);
    // const portfolioItem6 = $("<div>").addClass("media").appendTo(portfolioCol6);
    // const portfolioLink6 = $("<a>").attr("href", "https://dannyhoover.github.io/Weather-Dashboard/").attr("src", "...").attr("target", "_blank").appendTo(portfolioItem6);
    // const portfolioPic6 = $("<img>").addClass("mr-3 border").attr("alt", "Weather App").appendTo(portfolioLink6);
    // const portfolioItemBody6 = $("<div>Weather App</div>").addClass("item-header").appendTo(portfolioItem6);
    // const portfolioItemText6 = $("<h5>").addClass("item-text").text("This was a homework assignment where I called on the OpenWeather API to display current weather data and display a five day forecast of a city of the user's choice.").appendTo(portfolioItemBody6);
}

function displayContactPage() {
    document.getElementById("nav-item-about").className = "nav-item";
    document.getElementById("nav-item-portfolio").className = "nav-item";
    document.getElementById("nav-item-contact").className = "nav-item active";
}