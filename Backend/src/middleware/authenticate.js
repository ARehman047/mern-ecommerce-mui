const jwtProvider = require('../config/jwtProvider');
const userService = require('../services/user.service');

const authenticate = async (req, res, next) => {
    try {
        // Extract Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({ error: 'Authorization header is missing or invalid' });
        }

        // Extract token from header
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).send({ error: 'Token not found' });
        }

        // Decode user ID from token
        let userId;
        try {
            userId = jwtProvider.getUserIdFromToken(token);
        } catch (error) {
            return res.status(403).send({ error: 'Invalid or expired token' });
        }

        // Fetch user from database
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Attach user to request object
        req.user = user;

        // Proceed to next middleware
        next();
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = authenticate;
