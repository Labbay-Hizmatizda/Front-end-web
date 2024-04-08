export default class AppService {
  _base_link = "http://127.0.0.1:8000/api";

  async getResource(url) {
    const res = await fetch(`${this._base_link}${url}`);
    if (!res.ok) {
      throw new Error("Data not found");
    }
    const data = await res.json();
    return data;
  }

  //   async addResource(data, url) {
  //     const res = await fetch(this._base_link + url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (!res.ok)
  //       throw new Error(`Something went wrong in ${url}. Please try again`);
  //     return await res.json();
  //   }

  //   async removeResource(id, url) {
  //     const res = await fetch(`${this._base_link}/${url}/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok)
  //       throw new Error(`Something went wrong ${url}. Please try again`);
  //   }

  getData(page) {
    return this.getResource(page);
  }

  getFilteredData(page, key, filter) {
    return this.getResource(`/${page}/?${key}=${filter}`);
  }
}
