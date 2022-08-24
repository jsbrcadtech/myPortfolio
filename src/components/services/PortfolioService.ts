import axios from 'axios';

export class PortfolioService {
  private static serverURL: string = import.meta.env.VITE_BASE_URL;

  public static getSkills() {
    let dataURL: string = `${this.serverURL}/skills`;
    return axios.get(dataURL);
  }

  public static getContacts() {
    let dataURL: string = `${this.serverURL}/contacts`;
    return axios.get(dataURL);
  }

  public static getProjects() {
    let dataURL: string = `${this.serverURL}/projects`;
    return axios.get(dataURL);
  }
  public static getPictures() {
    let dataURL: string = `${this.serverURL}/pictures`;
    return axios.get(dataURL);
  }
  public static getBackgrounds() {
    let dataURL: string = `${this.serverURL}/background`;
    return axios.get(dataURL);
  }
  public static getEducations() {
    let dataURL: string = `${this.serverURL}/education`;
    return axios.get(dataURL);
  }
}
