
import {createContext} from 'react';

const AuthContext= createContext({
    token:null,
    userInfo:{},
    expiresAt:null
});

export default AuthContext;