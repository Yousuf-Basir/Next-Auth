import jwt from 'jsonwebtoken';
import { GetServerSidePropsContext } from 'next';

function validateJwtToken(token: string | undefined) {
    const secretKey = 'MYSECRET';
    try {
        // Verify token
        if(!token) return null
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err: any) {
        // If the token is invalid or expired, an error will be thrown
        // You can handle the error as per your application's needs
        console.error('Invalid or expired token:', err.message);
        return null;
    }
}

export default validateJwtToken;