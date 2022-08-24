import axios from 'axios';

export class UserService {
  // Remeber to specify the types
  private static serverURL: string = 'http://jsonplaceholder.typicode.com';

  public static getallUsers() {
    let dataURL: string = `${this.serverURL}/users`;
    // Returns a promise
    return axios.get(dataURL);
  }
}
