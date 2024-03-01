import { createContext, useContext, useReducer } from 'react';
import { AuthenticationContext } from './AuthenticationContext';

export const ChatContext = createContext();


export const ChatContextProvider = ({ children }) => {
    const {currentUser} = useContext(AuthenticationContext); 
    const INTIAL_STATE = {
        chatID: 'null',
        user: {}
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_USER':
                return {
                    user: action.payload,
                    chatID: currentUser.uid > action.payload.uid
                    ? currentUser.uid + action.payload.uid
                    : action.payload.uid + currentUser.uid
                }
            default:
                return state;
        } 
    }

    const [state, dispatch] = useReducer(chatReducer, INTIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};