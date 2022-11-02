import React,{createContext,useState} from "react"

let appreactor = React.createContext()


let Context=({children})=>{

    const [cart, setcart] = useState([])
    const [medit, setmedit] = useState([])

    return(
        <>
        <appreactor.Provider value={{cart,setcart,medit, setmedit}}>
            {children}
        </appreactor.Provider>
        </>
    )
}

export default Context

export {appreactor}