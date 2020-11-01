import React, {  useState } from 'react'
import './folder.css'
import Folderparticle from './folderparticle'
const Folder = (props) => {


const [files,setfiles] = useState([]);

const [filename,setfilename] = useState('')

// const [click,setclick] = useState(false);

const createfilehandler = (e) => {

e.preventDefault();

setfiles(files.concat({id:filename,name:filename}))

}
const setname = (event) => {

    setfilename(event.target.value);
    
    }

const deletehandler = (id) =>{
   
    setfiles(prevfiles => prevfiles.filter(file => file.id!==id))
 };
// let file;
// let editbox;
//  const edithandler =(id)=>{

//     setclick(true);
//      file=files.find(f=>f.id===id);
//      editbox=click?
//     <div classname="edit">
//     <input value={file.name} onChange={setname}/>
//     </div>:null;
   
//  }

const clickhandler = (id)=>{
props.history.push(props.match.url+'/'+id)

}


let filelist=files.map((f)=>{
return(
  <Folderparticle key={f.id}
 name={f.name} 
 id={f.id} 
 ondelete={deletehandler}
 onClick={clickhandler}
 // onedit={edithandler}
 />
)})




return <React.Fragment>
    
<div className="folder-page">

        <div className="creatorbox">
                <h1>Enter the file name</h1>
             <input type="text" placeholder="Enter file name" onChange={setname} value={filename}/>
             <button onClick={createfilehandler}>CREATE</button>
        </div>
{/* {editbox} */}
        <div className="folder-display">
             {filelist}
        </div>

</div></React.Fragment>

};
export default Folder;