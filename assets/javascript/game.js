/* Array of possible word choices */
var teams = ["cavaliers", "thunder", "celtics", "jazz", "pistons", "wizards", "raptors", "bucks", "pacers", "76ers", "heat",
    "hornets", "knicks", "bulls", "nets", "magic", "hawks", "rockets", "warriors", "spurs", "timberwolves", "trailblazers", "nuggets",
    "pelicans", "clippers", "lakers", "grizzlies", "kings", "mavericks", "suns"];

/* selects random word from array */
var word = teams[Math.floor(Math.random() * teams.length)];

/* generates array of underscores based on randomly selected word length */
var underscores = [];
for (var i = 0; i < word.length; i++) {
    underscores[i] = "_";
}

/* variable that will display number of wins */
var wins = 0;

/* variables to store sound effects */
var winsound = new Audio("https://instaud.io/_/1Mys.mp3");
var losesound = new Audio("https://instaud.io/_/1Myt.mp3");


/* variables to display number of guesses left */
var remainingChances = 8;

/* variable to store losing image */
var redx = '<img src= https://vignette.wikia.nocookie.net/mysingingmonsters/images/2/24/Red-x.png/revision/latest?cb=20171113115328 width=\"400px\" height=\"400px\">'

/* variables to store winning images */
var images =
    ['<img src= http://img.bleacherreport.net/img/images/photos/003/635/581/hi-res-95277666e2f5c16d6b7122529a8daf29_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://i.pinimg.com/736x/21/1a/f6/211af6b78b60013b99db6352c78b3167--russell-westbrook-baller.jpg  width=\"400px\" height=\"400px\">',
        '<img src= https://qph.fs.quoracdn.net/main-qimg-6d228b908a3f62012445cffbf45f4fd9  width=\"400px\" height=\"400px\">',
        '<img src= https://i.pinimg.com/236x/5f/43/52/5f435263d05255c318fb84bceb8c374d--john-stockton-utah-jazz.jpg width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/002/428/294/hi-res-74317934_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/002/522/524/hi-res-163824078-bradley-beal-of-the-washington-wizards-shoots-against-p_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://images.vexels.com/media/users/3/132484/isolated/preview/72fc44eba23061277b756e363ca07075-toronto-raptors-logo-by-vexels.png width=\"400px\" height=\"400px\">',
        '<img src= https://img.bleacherreport.net/img/images/photos/003/707/226/hi-res-14fb695ca75d4770d5fbd55ad21ebc45_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://i.imgur.com/wPwKvzg.jpg width=\"400px\" height=\"400px\">',
        '<img src= https://wallscover.com/images/allen-iverson-1.jpg width=\"400px\" height=\"400px\">',
        '<img src= http://i.cdn.turner.com/drp/nba/heat/sites/default/files/getty-images-71284903.jpg width=\"400px\" height=\"400px\">',
        '<img src= https://img.bleacherreport.net/img/images/photos/003/708/399/hi-res-985aff2b7b72767705ce60775547e0be_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://scontent-atl3-1.cdninstagram.com/vp/25afae405555e95a7c487e5a81d880fb/5B1529DB/t51.2885-15/s640x640/sh0.08/e35/12751220_818149494974863_994808162_n.jpg width=\"400px\" height=\"400px\">',
        '<img src= https://www.morrisonhotelgallery.com/images/big/Michael_Jordan_slamdunk,_Chicago,1988.jpg width=\"400px\" height=\"400px\">',
        '<img src= http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/nba_primary/new_jersey_nets.png width=\"400px\" height=\"400px\">',
        '<img src= https://www.almightyballer.com/wp-content/uploads/2017/01/orlando-magic-logo-by-Vexels.svg width=\"400px\" height=\"400px\">',
        '<img src= https://s3.amazonaws.com/freebiesupply/large/2x/atlanta-hawks-logo-pacman-with-text.png width=\"400px\" height=\"400px\">',
        '<img src= https://i.pinimg.com/736x/7b/d8/b8/7bd8b80b31c2f613861c870980f13774--houston-rockets-basketball.jpg width=\"400px\" height=\"400px\">',
        '<img src= http://cdn1.theodysseyonline.com/files/2015/11/22/635838211311205950-1522637004_warriors.png  width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/001/866/130/hi-res-hi-res-145731810_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/003/474/851/0b788cfbde3d2683fff4a25f5fa97550_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://img.bleacherreport.net/img/images/photos/003/701/542/hi-res-ffebf32c55ee4de381d431be3895684d_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://ssl.c.photoshelter.com/img-get2/I0000hKlQaAVmyY0/fit=1000x750/Allen-Iverson-04.jpg width=\"400px\" height=\"400px\">',
        '<img src= https://sportsfly.cbsistatic.com/fly-774/bundles/sportsmediacss/images/team-logos/nba/NO.svg width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/002/675/444/hi-res-456085429-teammates-deandre-jordan-chris-paul-and-blake-griffin_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= https://valdiviajovani.files.wordpress.com/2013/04/5-champs.jpg width=\"400px\" height=\"400px\">',
        '<img src= https://vignette.wikia.nocookie.net/logopedia/images/9/9c/7hc558rh9vls8j6fam4hly46n.gif/revision/latest?cb=20180119031834 width=\"400px\" height=\"400px\">',
        '<img src= https://images.vexels.com/media/users/3/132002/isolated/preview/75ad0bf326772c76335204c82adfae2a-sacramento-kings-logo-by-vexels.png width=\"400px\" height=\"400px\">',
        '<img src= http://img.bleacherreport.net/img/images/photos/002/821/208/hi-res-94543bac4bf7dee10e5ffecbf8d2037a_crop_exact.jpg?w=1200&h=1200&q=75 width=\"400px\" height=\"400px\">',
        '<img src= http://2xnw2mt2bw82xppry3quo8xq.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/nash.jpg width=\"400px\" height=\"400px\">'];


/* variable to hold letters that have been guessed */
var usedletters = [];

/* displays underscores, number of guesses left, and number of wins when pages loads */
window.onload = function data() {
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("chances").innerHTML = remainingChances;
    document.getElementById("wins").innerHTML = wins;
};

/* main playable part of game. Registers input from keyboard and tests to see if it matches word */
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.which).toLowerCase();
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter)
            underscores[j] = letter;
    }

    /* variable used to reference images*/
    var imgNumber = (teams.indexOf(word));

    /* tests to see if key pressed is in word. If not, adds letter to new array of letters already used */
    if (usedletters.indexOf(letter.toUpperCase()) < 0 && word.indexOf(letter) < 0) {
        (usedletters.push(letter.toUpperCase()));
        remainingChances = remainingChances - 1;
    }


    /* resets game if you run out of guesses */
    if (remainingChances === 0) {
        wins = -1;
        alert("Sorry! It was the " + word.toUpperCase());
        losesound.play();
        newgame();
        document.getElementById("image").innerHTML = redx;

    }

    /* prints data to DOM */
    document.getElementById("guessedletters").innerHTML = usedletters.join(" ");
    document.getElementById("chances").innerHTML = remainingChances;
    document.getElementById("word").innerHTML = underscores.join(" ").toUpperCase();
    document.getElementById("wins").innerHTML = wins;

    /* resets the game if you have guessed all the letters correctly */
    if (underscores.indexOf("_") < 0) {
        alert("That's right! It's the " + word.toUpperCase());
        winsound.play();
        newgame();
        document.getElementById("image").innerHTML = images[imgNumber];
    }
};


/* function to reset the game */
function newgame() {
    word = teams[Math.floor(Math.random() * teams.length)];
    underscores = [];
    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_";
    } wins = wins + 1;
    remainingChances = 8;
    usedletters = [];
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("chances").innerHTML = remainingChances;
    document.getElementById("guessedletters").innerHTML = usedletters;
}



