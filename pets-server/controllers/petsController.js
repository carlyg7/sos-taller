import * as service from '../services/petsService.js';

export function getIct_statss(req, res) {
    service.getIct_statss(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

