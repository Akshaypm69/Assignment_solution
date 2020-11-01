import React, {useState,useContext}from 'react'
import {Breadcontext} from './App'
import './newfolder.css'
const  NewFolder = (props) => {


    
    const [ click, setclick] = useState (false);
  
    const [ folderdetails, setfolderdetails ] = useState ({
      id:"",
      name:"",
      foldersid:[],
      files:[]
    });
    
    const {bread,setbread} =useContext(Breadcontext);
    

    const namehandler = (event)=>{
      const folder = {...folderdetails}
      folder.id=event.target.value;
      folder.name=event.target.value;
      setfolderdetails(folder)
    }
  
    const createhandler = (event) => {
      event.preventDefault();
      setclick(true)
    }
  
    const enterfolderhandler =(eevent)=>{
        eevent.preventDefault();
        setbread(bread.concat(folderdetails.id))
       props.history.push('/'+folderdetails.id)
        
    }

  let foldernew=click?
      <div className="created-folder">
          {folderdetails.id}
          <hr/>
        <button onClick={enterfolderhandler}>Enter</button>
        
    </div>:null 
  
    



return(
<React.Fragment>
    <div className="main">
        <div className="creatorbox">
            <h1>Create a new folder</h1>
            <input type="text" placeholder="enter folder name" value={folderdetails.name} onChange={namehandler}/>
             <div className="button-container">
                 <button>cancel</button>
                 <button onClick={createhandler}>create</button>
             </div> 
        </div>
        {foldernew}
    </div>

 
</React.Fragment>
)

};
export default NewFolder;