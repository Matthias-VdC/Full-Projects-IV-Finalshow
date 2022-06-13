class Screen{
    constructor(parent, options){
        this.parent = parent;

        if(typeof parent == "string"){
            this.parent = document.querySelector(parent);
        }

        this.effects = {};
    }
        render(){
            const container = document.createElement("div");
            container.classList.add("screenContainer");

            const wrapper1 = document.createElement("div");
            wrapper1.classList.add("screenWrapper");

            const wrapper2 = document.createElement("div");
            wrapper2.classList.add("screenWrapper");

            const wrapper3 = document.createElement("div");
            wrapper3.classList.add("screenWrapper");

            wrapper1.appendChild(wrapper2);
            wrapper2.appendChild(wrapper3);

            container.appendChild(wrapper1);

            this.parent.parentNode.insertBefore(container,this.parent);
        }

        add(type,options){

        }
    }
}