const Address = require('../models/address.model');

const findAddressById = async(addressId) => {
    try {

        const address = await Address.findById(addressId);

        if(!address){
            throw new Error("Address not found")
        }

        return address;

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {findAddressById};