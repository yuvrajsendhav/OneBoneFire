import React, { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import MainStack from "./MainStack"
import LoginStack from "./LoginStack"
const MasterStack = () =>{
const {token , isLoading } = useContext(AuthContext)
// console.log('MasterStack userTokens',token);
return(
    <React.Fragment>
        {token == null ? <LoginStack/> : <MainStack/> }
    </React.Fragment>
)
}
export default MasterStack