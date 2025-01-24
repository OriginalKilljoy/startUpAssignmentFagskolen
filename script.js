showBaseLayout()

function showCard1() {
    showBaseLayout()
    document.getElementById("card1").innerHTML = /*HTML*/ `
    <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet
                    <a href="https://code.visualstudio.com/" target="_new">Visual Studio Code</a>
                </li>
                <br/>
                    
                Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
                </li>
                <li>
                    Nettleseren
                    <a href="https://www.google.com/intl/no/chrome/" target="_new">Google Chrome</a>
                </li>
            </ul>
        </div>
    `;
}

function showCard2() {
    showBaseLayout()
    document.getElementById("card2").innerHTML = /*HTML*/ `
    <div class="inneCard">
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a></li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a></li>
        </ul>
    </div>
    `;
}

function showCard3() {
    showBaseLayout()
    document.getElementById("card3").innerHTML = /*HTML*/ `
    <div class="inneCard">
        Vi bruker CSS til å style et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a></li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a></li>
        </ul>
    </div>
    `;
}

function showCard4() {
    showBaseLayout()
    document.getElementById("card4").innerHTML = /*HTML*/ `
    <div class="inneCard">
        Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering ved å
        manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>

                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle.
                </li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript Reference</a>
                </li>
            </ul>
    </div>
    `;
}

function showBaseLayout(){
    document.getElementById('baseLayout').innerHTML = /*HTML*/`
    <div class="card">
        <div class="header green" onclick="showCard1()">Verktøy</div>
            <div id="card1"></div>
    </div>

    <div class="card">
        <div class="header blue" onclick="showCard2()">HTML</div>
            <div id="card2"></div>
    </div>

    <div class="card">
        <div class="header red" onclick="showCard3()">CSS</div>
        <div id="card3"></div>
    </div>

    <div class="card">
        <div class="header yellow" onclick="showCard4()">JavaScript</div>
        <div id="card4"></div>
    </div>

    <div class="card">
        <div class="header gray" onclick="showCard5()">Hode, kropp og ben</div>
            <div id="card5">
        </div>
    </div>
    
    `
}

function showCard5() {
    
    showBaseLayout()

    document.getElementById("card5").innerHTML = /*HTML*/ `
    <div class="inneCard">
        <div class="imageGame" id="head">
            <button onclick="showHead4()">◀</button>
            <img src="img/head1.png" />
            <button onclick="showHead2()">▶</button>
        </div>

        <div class="imageGame" id="body">
            <button onclick="showBody4()">◀</button>
            <img src="img/body1.png" />
            <button onclick="showBody2()">▶</button>
        </div>

        <div class="imageGame" id="legs">
            <button onclick="showLegs4()">◀</button>
            <img src="img/legs1.png" />
            <button onclick="showLegs2()">▶</button>
        </div>
    </div>
    `;
}

//HEAD
function showHead1(){
    document.getElementById('head').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showHead4()">◀</button>
        <img src="img/head1.png" />
        <button onclick="showHead2()">▶</button>
    </div>
    `
}

function showHead2(){
    document.getElementById('head').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showHead1()">◀</button>
        <img src="img/head2.png" />
        <button onclick="showHead3()">▶</button>
    </div>
    `
}
function showHead3(){
    document.getElementById('head').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showHead2()">◀</button>
        <img src="img/head3.png" />
        <button onclick="showHead4()">▶</button>
    </div>
    `
}

function showHead4(){
    document.getElementById('head').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showHead3()">◀</button>
        <img src="img/head4.png" />
        <button onclick="showHead1()">▶</button>
    </div>
    `
}

//BODY
function showBody1(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showBody4()">◀</button>
        <img src="img/body1.png" />
        <button onclick="showBody2()">▶</button>
    </div>
    `
}

function showBody2(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showBody1()">◀</button>
        <img src="img/body2.png" />
        <button onclick="showBody3()">▶</button>
    </div>
    `
}
function showBody3(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showBody2()">◀</button>
        <img src="img/body3.png" />
        <button onclick="showBody4()">▶</button>
    </div>
    `
}

function showBody4(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showBody3()">◀</button>
        <img src="img/body4.png" />
        <button onclick="showBody1()">▶</button>
    </div>
    `
}

//LEGS
function showLegs1(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showLegs4()">◀</button>
        <img src="img/legs1.png" />
        <button onclick="showLegs2()">▶</button>
    </div>
    `
}

function showLegs2(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showLegs1()">◀</button>
        <img src="img/legs2.png" />
        <button onclick="showLegs3()">▶</button>
    </div>
    `
}
function showLegs3(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showLegs2()">◀</button>
        <img src="img/legs3.png" />
        <button onclick="showLegs4()">▶</button>
    </div>
    `
}

function showLegs4(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <div class="imageGame">
        <button onclick="showLegs3()">◀</button>
        <img src="img/legs4.png" />
        <button onclick="showLegs1()">▶</button>
    </div>
    `
}

function changeToVerticalLayout(){
    document.getElementById('page').classList.add = []
    document.getElementById('page').classList.add('verticalLayout')
}

function changeToHorisontalLayout(){
    document.getElementById('page').classList.add = []
    document.getElementById('page').classList.add('horizontalLayout')
}

function changeToGridLayout(){
    document.getElementById('page').classList.add = []
    document.getElementById('page').classList.add('gridLayout')
}