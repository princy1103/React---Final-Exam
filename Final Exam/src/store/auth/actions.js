export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

export const signIn = (user) => ({ type: SIGN_IN, payload: user });
export const signOut = () => ({ type: SIGN_OUT });


