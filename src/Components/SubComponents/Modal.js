import React from "react";

import "../../SASS/components/_modal.scss";

const Modal = (props) => {

    return (
        <>
            {props.show === true ? 
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Title</h4>
                        </div>
                        <div clasName="modal-body">
                            This is modal content
                        </div>
                        <div className="modal-footer">
                            <button className="button">Close</button>
                        </div>
                    </div>
                </div>
            : null}
        </>

    )
}

export default Modal