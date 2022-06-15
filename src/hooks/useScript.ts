import { useEffect } from "react";

const useScript = (url:string) => {
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = url;
        script.setAttribute("type","text/jsx");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
}

export {useScript};