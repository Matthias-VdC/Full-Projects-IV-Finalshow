export class Screen{
    constructor(parent, options){
        this.parent = parent;

        console.log(this.parent);
        if(typeof parent == "string"){
            this.parent = document.querySelector(parent);
        }


        this.effects = {};

        this.render();
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
        this.nodes = {container, wrapper1, wrapper2, wrapper3};
        
        this.onResize();
    }

    onResize(e){
        this.rect = this.parent.getBoundingClientRect();
		
		if ( this.effects.vcr && !!this.effects.vcr.enabled ) {
			this.generateVCRNoise();
		}
    }

    add(type,options){
        const config = Object.assign({},{
            fps: 30,
            blur: 1
        }, options);

        if(Array.isArray(type)){
            for (const t of type){
                this.add(t);
            }

            return this;
        }

        const that = this;

        if(type === "snow"){
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.classList.add(type);
            canvas.width = this.rect.width/2;
            canvas.height = this.rect.height/2;

            this.nodes.wrapper2.appendChild(canvas);
            
            animate();
            
            function animate(){
                that.generateSnow(ctx);
                that.snowframe = requestAnimationFrame(animate);
            }

            this.effects[type] = {
                wrapper: this.nodes.wrapper2,
                node: canvas,
                enabled: true,
                config
            }

            return this;
        }
    }

    generateSnow(ctx){
        let w = ctx.canvas.width;
        let h = ctx.canvas.height;
        let d = ctx.createImageData(w,h);
        let b = new Uint32Array(d.data.buffer);
        let len = b.length;

        for(let i = 0; i<len;i++){
            b[i] = ((255 * Math.random()) | 0) << 24;
        }

        ctx.putImageDate(d,0,0);
    }

    
   
}

export default Screen;