import $ from 'jquery';
import _ from 'lodash';
import request from '../lib/request';

export default class
{
    /**
     * @Constructor
     */
    constructor() {

    }

    /**
     *
     * @param {String} url
     * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
     * @param {Object} options
     * @param {Boolean} remote
     * @param {Function} callback
     */
    makeRequest(url, method, options, remote, callback) {
        request(url, {
            method: method,
            remote: remote,
            requestOptions: options
        }, callback);
    }
}