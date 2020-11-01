import React ,{ useState } from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import NewFolder from './Newfolder'
import Folder from './folder/folder'
import './App.css';
import Bread from './breadcrumb'
export const Breadcontext = React.createContext({
  bread:['/'],
  setbread:()=>{}
});
function App() {
const [bread,setbread] = useState (['/']);

const value ={bread,setbread};


  let links =[<Link to="/">/Home</Link>];

  links.push(<Link to= {`/${bread[1]}`} >/{bread[1]}</Link>)



  return (
    <BrowserRouter >
    <React.Fragment>

  <Bread>{links}</Bread>
  <Breadcontext.Provider value={value}>
     <Route path='/' exact component={NewFolder}/>
     <Route path='/:fid' component={Folder}/>
  </Breadcontext.Provider>


   </React.Fragment>
   </BrowserRouter>
  );
}

export default App;
