import React from "react";

class FinalWorkService {

    private readonly url = 'http://finalshowcasebackend.be/finalwork'

    public async fetchFinalWorks(){
        const response = await fetch(`${this.url}`);

        return response.json();
    }

}


export const finalWorkService = new FinalWorkService 