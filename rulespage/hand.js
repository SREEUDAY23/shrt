
var num = [1, 2, 3, 4, 5, 6];
var s2 = 0;
var w = 0, t = 0;
var sig = 0, sig2 = 0;
var s1 = 0;
function one() {
    var r1 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r1 == 1) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game over");
                t = s2 + 1;
                sig = 1;
                sig2 = 1;
                w = 0;
            }
        } else {
            s2 = s2 + r1;
            if (r1 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r1 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r1 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r1 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r1 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r1 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
    }
    if (sig == 1) {
        if (sig2 == 1) {
            sig2 = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b1 = num[Math.floor(Math.random() * num.length)];
            if (b1 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                if (w >= 10) {
                    alert("you lost");
                }
            } else {
                s1 = s1 + 1;
                if (s1 >= t) {
                    alert("you won");
                }
                if (b1 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                } else if (b1 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                } else if (b1 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                } else if (b1 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                } else if (b1 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }

    }
}
function two() {
    var r2 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r2 == 2) {
            document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game-over");
                sig = 1;
                sig2 = 1;
                w = 0;
                t = s2 + 1;
            }
        } else {
            s2 = s2 + r2;
            if (r2 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r2 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r2 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r2 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
            else if (r2 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
    }
    if (sig == 1) {
        if (sig2 == 1) {
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            sig2 = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b2 = num[Math.floor(Math.random() * num.length)];
            if (b2 == 2) {
                alert("out");
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                if (w >= 10) {
                    alert("game-over");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 2;
                if (s1 >= t) {
                    alert("won");
                    window.location.reload();
                }
                if (b2 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b2 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b2 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b2 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b2 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
function three() {
    var r3 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r3 == 3) {
            document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game-over");
                sig = 1;
                sig2 = 1;
                w = 0;
                t = s2 + 1;
            }
        } else {
            s2 = s2 + r3;
            if (r3 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r3 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r3 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r3 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
            else if (r3 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
    }
    if (sig == 1) {
        if (sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b3 = num[Math.floor(Math.random() * num.length)];
            if (b3 == 3) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                if (w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 3;
                if (s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if (b3 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b3 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b3 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b3 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b3 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
function four() {
    var r4 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r4 == 4) {
            document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game-over");
                sig = 1;
                sig2 = 1;
                w = 0;
                t = s2 + 1;
            }
        } else {
            s2 = s2 + r4;
            if (r4 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r4 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r4 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r4 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
            else if (r4 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
    }
    if (sig == 1) {
        if (sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b4 = num[Math.floor(Math.random() * num.length)];
            if (b4 == 4) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                if (w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 4;
                if (s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if (b4 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b4 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b4 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b4 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b4 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
function five() {
    var r5 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r5 == 5) {
            document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game-over");
                sig = 1;
                sig2 = 1;
                w = 0;
                t = s2 + 1;
            }
        } else {
            s2 = s2 + r5;
            if (r5 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r5 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r5 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r5 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
            else if (r5 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
        if (sig == 1) {
            if (sig2 == 1) {
                sig2 = 0;
                document.getElementById("wickets").innerHTML = 0;
                document.getElementById("runs").innerHTML = 0;
                document.getElementById("overs").innerHTML = 0.0;
                onew();
            } else {
                var b5 = num[Math.floor(Math.random() * num.length)];
                if (b5 == 5) {
                    w = w + 1;
                    document.getElementById("wickets").innerHTML = w;
                    document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    if (w >= 10) {
                        alert("lose");
                        window.location.reload();
                    }
                } else {
                    s1 = s1 + 5;
                    if (s1 >= t) {
                        alert("you won");
                        window.location.reload();
                    }
                    if (b5 == 1) {
                        document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                        document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                        document.getElementById("runs").innerHTML = s1;
                    }
                    if (b5 == 2) {
                        document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                        document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                        document.getElementById("runs").innerHTML = s1;
                    }
                    if (b5 == 4) {
                        document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                        document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                        document.getElementById("runs").innerHTML = s1;
                    }
                    if (b5 == 3) {
                        document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                        document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                        document.getElementById("runs").innerHTML = s1;
                    }
                    if (b5 == 6) {
                        document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                        document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                        document.getElementById("runs").innerHTML = s1;
                    }
                }
            }
        }
    }
}
function six() {
    var r6 = num[Math.floor(Math.random() * num.length)];
    if (sig == 0) {
        if (r6 == 6) {
            document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if (w >= 10) {
                alert("game-over");
                sig = 1;
                sig2 = 1;
                w = 0;
                t = s2 + 1;
            }
        } else {
            s2 = s2 + r6;
            if (r6 == 1) {
                document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r6 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r6 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            } else if (r6 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
            else if (r6 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s2;
            }
        }
    }
    if (sig == 1) {
        if (sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b6 = num[Math.floor(Math.random() * num.length)];
            if (b6 == 6) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                if (w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 6;
                if (s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if (b6 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b6 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b6 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b6 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
                if (b6 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}

var count = 0;
var o1 = 0, o2 = 0;
function overs() {
    o2 = o2 + 1;

    if (o2 >= 6) {
        o2 = 0;
        o1 = o1 + 1;
    }
    if (o2 <= 5) {
        document.getElementById("overs").innerHTML = o1 + "." + o2;
    }

}
function onew() {
    var image_x = document.getElementById('imgbat');
    imgbat.parentNode.removeChild(image_x);
    document.getElementById("p1-name").innerHTML = "<img src = 'cricket-ball.png' width = '50px' /> ";
    document.getElementById("cen").innerHTML = "Player 1 batting | bowling Player 2";
    var image_y = document.getElementById('imgball');
    imgball.parentNode.removeChild(image_y)
    document.getElementById("p2-name").innerHTML = "<img src = 'cricket-bat.png' width = '50px' /> ";
}