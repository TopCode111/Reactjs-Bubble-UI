var theta = [];

    var ar = ['red', 'green', 'purple', 'black', 'orange', 'yellow', 'maroon', 'grey', 'lightblue', 'tomato', 'pink', 'maroon', 'cyan', 'magenta', 'blue', 'chocolate', 'darkslateblue', 'coral', 'blueviolet', 'burlywood', 'cornflowerblue', 'crimson', 'darkgoldenrod', 'olive', 'sienna', 'red', 'green', 'purple', 'black', 'orange', 'yellow', 'maroon', 'grey', 'lightblue', 'tomato', 'pink', 'maroon', 'cyan', 'magenta', 'blue', 'chocolate', 'darkslateblue', 'coral', 'blueviolet', 'burlywood', 'cornflowerblue', 'crimson', 'darkgoldenrod', 'olive', 'sienna'];
    

var setup = function (n, rx, ry, id, colors, px, py) {
    var main = document.getElementById(id);
    var mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
    var circleArray = [];

    for (var i = 0; i < n; i++) {
        var circle = document.createElement('div');
        
        circle.className = 'circle number' + i;
        circleArray.push(circle);
        circleArray[i].posx = Math.round(rx * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(ry * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.backgroundColor = colors[i];
        circleArray[i].style.top = ((300  / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((300 / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
    }
};

var generate = function (n, rx, ry, id, colors, px, py) {
    var frags = 360 / n;
    theta = [];
    for (var i = 0; i <= n; i++) {
    		theta.push((frags / px) * i * Math.PI);
    }
    setup(n, rx, ry, id, colors, px, py)
}


generate(19, 110,110,"main", ar.slice(11, 32), 180, 0)
generate(20, 80,80,"main", ar.slice(1, 7), 180, 0)
generate(6, 40,40,"main", ar.slice(1, 7), 180, 0)
generate(1, 0,0,"main", ar.slice(0, 1), 180, 0)