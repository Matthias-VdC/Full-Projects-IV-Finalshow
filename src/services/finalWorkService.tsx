import React from "react";

class FinalWorkService {

    private readonly url = 'http://10.3.50.231/finalwork'

    public async fetchFinalWorks(){
        const response = await fetch(`${this.url}`);

        return response.json();
    }

}


export const finalWorkService = new FinalWorkService 