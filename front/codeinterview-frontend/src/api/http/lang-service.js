import axios from 'axios';

import config from 'api/config';

class LangService {
  constructor() {
    this.axios = axios.create({
      baseURL: `${config.http.baseURL}/languages/`,
      timeout: 5000,
      headers: {},
    });
  }

  async getLanguages() {
    const languages = await this.axios.get();
    console.log(languages);
    const rv = {};
    languages.data.forEach(lang => {
      rv[lang.code] = lang;
    });
    // const rv = {};
    // rv[0]='python';
    // rv[1]='cpp';
    return rv;
  }
}

export default () => new LangService();
