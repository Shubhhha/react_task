import  React  from  "react";
// Context has been created
const  ThemeContext  =  React.createContext(false);
// Provider
const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const  [auth, setAuth]  =  React.useState(false);
//     const toggleFunction =  ()  =>  {
//     setToggle(!toggle);
// };
return  (
    <ThemeContext.Provider value={{ toggle, setToggle ,auth ,setAuth }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };