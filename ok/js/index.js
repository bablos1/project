var elem = document.getElementById("podmenu");
var menu = {
    position: false,
    sub:function(){
        if (this.position == false) {
        elem.classList.add("openMenu");
        this.position = true;
        } else if ( this.position == true) {
        elem.removeAttribute("class");
        elem.classList.add("podmenu");
        this.position = false;
        };
    },
    statick:function(){
        this.position = false;
        elem.removeAttribute("class");
        elem.classList.add("podmenu");
    }
    }