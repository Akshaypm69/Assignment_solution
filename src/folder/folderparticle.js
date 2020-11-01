import  React from 'react'
import './folder.css'
const FolderParticle = (props) => {

return (
    <div onClick={()=>props.onClick(props.id)} className="folderparticle">

    {props.name}
    <button onClick={()=>props.ondelete(props.id)}>Delete</button>
    {/* <button onClick={()=>props.onedit(props.id)}>Edit</button> */}
    </div>
)


};
export default FolderParticle;