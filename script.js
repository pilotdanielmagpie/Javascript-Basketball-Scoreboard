let score1 = 0;
let score2 = 0;
let homeScoreEl = document.getElementById('home-score');
let awayScoreEl = document.getElementById('away-score');

function addOneHome() {
    console.log('add clicked');
    score1 += 1;
    homeScoreEl.innerText = score1;
}

function addTwoHome() {
    console.log('add clicked');
    score1 += 2;
    homeScoreEl.innerText = score1;
}

function addThreeHome() {
    console.log('add clicked');
    score1 += 3;
    homeScoreEl.innerText = score1;
}

function addOneAway() {
    console.log('add clicked');
    score2 += 1;
    awayScoreEl.innerText = score2;
}

function addTwoAway() {
    console.log('add clicked');
    score2 += 2;
    awayScoreEl.innerText = score2;
}

function addThreeAway() {
    console.log('add clicked');
    score2 += 3;
    awayScoreEl.innerText = score2;
}