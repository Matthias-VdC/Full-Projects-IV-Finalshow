class FinalWorkService {
  private readonly url =
    "https://mighty-earth-63459.herokuapp.com/http://finalshowcasebackend.be/finalwork";

  public async fetchFinalWorks() {
    const response = await fetch(`${this.url}`);

    return response.json();
  }
}

export const finalWorkService = new FinalWorkService();
