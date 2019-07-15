$(document).ready(function () {
    $('.icon').click(function () {
        $('ul').toggleClass('active');
    });
})

function clickOnHome() {
    $('#home').on('click', event => {
        document.location.reload();
    });
}

function clickOnAbout() {
    $('#about').on('click', event => {
        $('.main').hide();
        $('.js-top').html(`<div class="js-about"><p>Hi, there! This is Huseyin Gundogdu who currently lives in San Francisco Bay Area. I am an enthusiast to develop
    the user interface of websites, especially using HTML/CSS, JavaScript, JQuery and React. Besides that, Cloud computing is one 
    of the my interests and I achieved AWS Solution Architect-Associate certificate. Outside of coding, my interest areas are 
    swimming, soccer, hiking and black tea. Feel free to get in touch by any means of communication.</p></div>`);
    });
}

function clickOnProjects() {
    $('#projects').on('click', event => {
        $('.main').hide();
        $('.js-top').html(`<div class="js-project"><h1>Breaking Bad Quiz App</h1><div class="logos"><img class="first-logo" alt="html logo" src="html.png"/><img class="second-logo" alt="css logo" src="csslogo-2582747_960_720.png"/>
        <img class="third-logo" alt="js logo" src="js.png"/><img alt="jquery-logo" class="last-logo" src="jquery-logo.jpg"/></div>
        <img class="intro-quiz" src="Screen Shot 2019-07-13 at 8.10.53 PM.png" alt="quiz app intro image"/>
        <p>Test your 'Breaking Bad' knowledge with this quiz app. 
        It includes 10 questions and four choices per question. If you know the question, you will get '1' score for every question. Don't worry, if you make a wrong, correct answer will show up on the screen.
        End of the quiz, get your score and you can restart it, if you want.</p><div class="targets">
        <a target="_blank" href="https://github.com/hgundogdu53/breakingBad-quizApp">Repo</a>
        <a target="_blank" href="https://hgundogdu53.github.io/breakingBad-quizApp/">Live</a></div>
        </div>`);
    });
}



clickOnHome();
clickOnAbout();
clickOnProjects();
