const addressService = require('../services/address.service')

const getAddressById = async(req, res) => {
    try {
        
        const address = await addressService.findAddressById(req.params.addressId)
        return res.status(200).send(address)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {getAddressById};