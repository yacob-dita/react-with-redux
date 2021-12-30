import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
 const [modalIsOpen, setModalIsOpen] =useState(false);
    
function deleteHandler(){
    setModalIsOpen(true);
}
function closeModalHandeler(){
        setModalIsOpen(false);
        
    }

    return (
        <div className ='Card'>
          <h2>{props.text}</h2>
            <div className='action'> 
               <button className='btn'onClick={deleteHandler}>Delete</button>
            </div>
            
            {modalIsOpen && <Modal onCancel={closeModalHandeler}onConfirm={closeModalHandeler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandeler}/>}
             
        </div>
      );
}

export default Todo;