/*
  newData, requestData: object { category: 'string', searchWord: 'string' [, data: [] ]}
*/

export default class {
    constructor() {
        this.storage = {
            repositories: {},
            issues: {},
            users: {}
        };
    }

    saveData(newData) {
        this.storage[newData.category][newData.searchWord] = newData.data;
    }

    getData(requestData) {
        return this.storage[requestData.category]
            ? this.storage[requestData.category][requestData.searchWord]
            : undefined;
    }
}
