import rp from 'request-promise';
import url from 'url';


/**
 * Encapsulates the http client that interacts with bitsensor's
 * elastalert_api.
 */
export class ElastAlertAPIClient {
    /**
     * Creates the elastalert API client.
     * @param {Object} opts ElastAlert API information.
     * @param {string} opts.host The host ElastAlert API is listening to.
     * @param {number} opts.port The port ElastAlert API is listening to.
     */
    constructor(opts = {}) {
        this.host = opts.host || 'http://localhost';
        this.port = opts.port || 8090;

        this.rule = {
            get: this._rule_get.bind(this),
            update: this._rule_update.bind(this),
            delete: this._rule_delete.bind(this)
        };
    }

    /**
     * @returns URL of the ElastAlert API.
     */
    getUrl() {
        return `${this.host}:${this.port}`;
    }

    /**
     * @returns The current version running
     */
    async info() {
        return await rp.get({ url: this.getUrl(), json: true });
    }

    /**
     * @returns either 'SETUP', 'READY', 'ERROR', 'STARTING', 'CLOSING', 'FIRST_RUN' or 'IDLE' 
     *   depending on the current ElastAlert process status.
     */
    async status() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/status'), json: true });
    }

    /**
     * Stops the current ElastAlert process.
     */
    async stop() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/status/control/stop'), json: true });
    }

    /**
     * Starts the current ElastAlert process.
     */
    async start() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/status/control/start'), json: true });
    }

    /**
     * Restarts the current ElastAlert process.
     */
    async restart() {
        await this.stop();
        await this.start();
    }

    /**
     * @return A list of directories and rules that exist in the rulesPath (from the config) and 
     *   are being run by the ElastAlert process.
     */
    async rules() {
        return await rp.get({ url: url.resolve(this.getUrl(), '/rules'), json: true });
    }

    /**
     * @param {string} id ID of a rule to retrieve.
     * @return Rule object, where :id is the id of the rule returned by GET /rules, which will 
     *   return the file contents of that rule.
     * @function get
     * @memberof rule
     */
    async _rule_get(id) {
        return await rp.get({ url: url.resolve(this.getUrl(), `/rules/${id}`), json: true });
    }

    /**
     * Where :id is the id of the rule returned by GET /rules, which will 
     * allow you to edit the rule. The body send should be:
     * 
     * ```javascript
     * {
     *   // Required - The full yaml rule config.
     *   "yaml": "..."
     * }
     * ```
     * 
     * @param {string} id ID of a rule to update.
     * @param {Object} body New rule body.
     * @return {Object} Result of the rule update.
     * @function update
     * @memberof rule
     */
    async _rule_update(id, body) {
        return await rp.post({
            url: url.resolve(this.getUrl(), `/rules/${id}`),
            body,
            json: true
        });
    }

    /**
     * @param {string} id ID of the rule to delete.
     * @return {Object} Result of the rule delete.
     * @function delete
     * @memberof rule
     */
    async _rule_delete(id) {
        return await rp.del({ url: url.resolve(this.getUrl(), `/rules/${id}`), json: true });
    }
}