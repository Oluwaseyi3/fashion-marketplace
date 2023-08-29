import React, {createContext, useEffect, useContext, useReducer} from "react"

interface User {
    id: number;
    username: string;
    email: string;
    country: string;
    isSeller: boolean;
}

  interface AuthState{
    user: User | null;
    loading: boolean;
    error: string | null;
  }

  type Action = 
  | {type: "LOGIN_START"} 
  | {type: "LOGIN_SUCCESS"; payload: User}  
  | {type: "LOGIN_FAILURE"; payload: any} 
  | {type: "LOGOUT"}   
  
  const INITIAL_STATE: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    loading: false,
    error: null,
  };
  

export const AuthContext = createContext<{state: AuthState; dispatch: React.Dispatch<Action>}>({
    state: INITIAL_STATE,
    dispatch: () => {}
})



const AuthReducer = (state:AuthState, action: Action) : AuthState => {
    switch (action.type) {
        case "LOGIN_START":
           return {
            user: null,
            loading: true,
            error: null
           } ;
           case "LOGIN_SUCCESS":
            return {
             user: action.payload,
             loading: false,
             error: null
            } 
            case "LOGIN_FAILURE":
                return {
                  user: null,
                  loading: false,
                  error: action.payload as string,
             };
             case "LOGOUT":
                return {
                  user: null,
                  loading: false,
                  error: null,
             };
    
             default:
                return state;
    }
}

interface AuthContextProviderProps{
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
       localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
    
    return (
        <AuthContext.Provider value={{ state, dispatch }} >
           {children}
        </AuthContext.Provider> 
    );
}
