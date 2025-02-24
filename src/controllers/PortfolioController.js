const { CreatePortfolioServices, DeletePortfolioServices, UpdatePortfolioServices,GetPortfolioServices } = require('../services/PortfolioServices')

exports.CreatePortfolio = async (req, res) => {
    let result = await CreatePortfolioServices(req);
    return res.status(200).json(result);
}

exports.DeletePortfolio = async (req, res) => {
    let result = await DeletePortfolioServices(req);
    return res.status(200).json(result);
}

exports.UpdatePortfolio = async (req, res) =>{
    let result = await UpdatePortfolioServices(req);
    return res.status(200).json(result);
}

exports.GetPortfolio = async (req, res) => {
    let result = await GetPortfolioServices(req);
    return res.status(200).json(result);
}