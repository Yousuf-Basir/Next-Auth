import jwt from 'jsonwebtoken';

function generateToken( payload: any ) {
    const secretKey = 'MYSECRET';
    // Adjust 'expiresIn' to set the token expiration time (e.g., '1h' for one hour)
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}

export default generateToken;