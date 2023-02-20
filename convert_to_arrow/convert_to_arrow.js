<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Functions</title>
</head>
<body id="body">
    <h1>My Boring Website</h1>
    <p id="paragraph">
        This website is boring, with very little CSS. 
        However, we really just care about the javascript. 
        For example, if you click <button id="button">this button</button>, the background of this paragraph tag will change to blue.
    </p>
    <p>We also have a <button id="alert">alert</button> button that will grab the text from the input below and show it in a popup.</p>
    <div>
        <input type="text" id="popup-input">
    </div>
    <p>
        We just like random interactivity in the site, including a fun effect if you hover over <span id="hover-this"><b>this.</b></span>
    </p>
    <p id='finalTask'onmouseover="mouseOverFunction(this)">
        Another task: This should be another feature. 
        I want to click anywhere in this paragraph tag and I want to be able to change the background color to whatever is in this input: <input  id='color' type="text"/>.
    </p>
    <script>
        document.getElementById("button").onclick = () => {
            setBackgroundColorById("paragraph", "blue");
        }
        document.getElementById("alert").onclick = () => {
            alert(document.getElementById("popup-input").value);
        }
        document.getElementById("hover-this").onmouseover = () => {
            setBackgroundColorById("body", "red");
        }
        document.getElementById("hover-this").onmouseout = () => {
            setBackgroundColorById("body", "white");
        }
        document.getElementById('finalTask').onclick=()=> {
            let color = document.getElementById('color').value
            setBackgroundColorById('finalTask', color)
        }
        const getValueFromId = id => {
            return document.getElementById(id).value;
        }
        const setBackgroundColorById = (el, color) => {
            document.getElementById(el).style = "background-color: " + color
        }
        const mouseOverFunction = el => {
            el.style = "background-color: black";
        }
    </script>
</body>
</html>