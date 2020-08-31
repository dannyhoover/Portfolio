const aboutPage = $("#about-page");
const portfolioPage = $("#portfolio-page");
const contactPage = $("#contact-me");

const aboutLink = $("#nav-link-about");
const portfolioLink = $("#nav-link-portfolio");
const contactLink = $("nav-link-contact");

displayAboutPage();

// links in header
aboutLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayAboutPage();
});
portfolioLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayPortfolioPage();
});
contactLink.on("click", function (event) {
    event.preventDefault();

    $("#about-page").empty();
    $("#portfolio-page").empty();
    $("#contact-me").empty();

    displayContactPage();
});

// page functions
function displayAboutPage() {
    const aboutMeRow1 = $("<div>").addClass("row").appendTo(aboutPage);
    const aboutMeCol = $("<div>").addClass("col-md-3").appendTo(aboutMeRow1);
    const aboutMeText = $("<h1>").text("About Me").appendTo(aboutMeCol);

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

    const famPicDiv = $("<div>").addClass("col-md-5").appendTo(aboutMeRow2);
    const famPicture = $("<img>").attr("src", "https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/60346112_10219121352135738_9049716716552060928_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=hCW4q79rW04AX_pD-R3&_nc_ht=scontent.fhio2-1.fna&oh=9f2421e530d25db74922a5da3e3a920a&oe=5F7241D0").attr("alt", "thumbnail").addClass("img-thumbnail").appendTo(famPicDiv);
}

function displayPortfolioPage() {

    const portfolioOptions = $("<div>").addClass("portfolioItem").appendTo(portfolioPage);

}

function displayContactPage() {

}