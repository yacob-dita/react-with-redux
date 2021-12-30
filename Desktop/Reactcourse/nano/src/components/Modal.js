function Modal (props){
    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }
    return(
    <div claasName ='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>

        <button className='btn'onClick={confirmHandler}>Confrim</button>
    </div>
    );
}


export default Modal;