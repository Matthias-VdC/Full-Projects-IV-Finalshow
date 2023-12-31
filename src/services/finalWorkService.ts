class FinalWorkService {
  private readonly url =
    "https://mighty-earth-63459.herokuapp.com/http://finalshowcasebackend.be";

  public async fetchFinalWorks() {
    const response = await fetch(`${this.url}/finalwork`);

    return response.json();
  }

  public async fetchFinalWorkById(id: any) {
    const response = await fetch(`${this.url}/finalwork/${id}`);
    const data = await response.json();
    console.log(data);

    return data;
  }

  public async fetchAwards() {
    const response = await fetch(`${this.url}/price`);

    return response.json();
  }
}

export const finalWorkService = new FinalWorkService();
