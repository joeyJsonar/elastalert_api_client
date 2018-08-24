import rp from 'request-promise';
import url from 'url';


export class ElastAlertAPIClient {
    constructor(opts = {}) {
        this.host = opts.host || 'http://localhost';
        this.port = opts.port || 8090;

        this.rule = {
            get: this._rule_get.bind(this),
            update: this._rule_update.bind(this),
            delete: this._rule_delete.bind(this)
        };
    }

    getUrl() {
        return `${this.host}:${this.port}`;
    }

    async info() {
        return await rp.get({ url: this.getUrl(), json: true });
    }

    async status() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/status'), json: true });
    }

    async rules() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/rules'), json: true });
    }

    async _rule_get(id) {
        return await rp.get({ url: url.resolve(this.getUrl(), `/rules/${id}`), json: true });
    }

    async _rule_update(id, body) {
        return await rp.post({
            url: url.resolve(this.getUrl(), `/rules/${id}`),
            body,
            json: true
        });
    }

    async _rule_delete(id) {
        return await rp.del({ url: url.resolve(this.getUrl(), `/rules/${id}`), json: true });
    }
}