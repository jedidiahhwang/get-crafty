import React from "react";

import "../../SASS/components/_addDrinkModal.scss";

const AddDrinkModal = (props) => {



    return (
        <>
            {props.isOpen === true ? 
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Title</h4>
                        </div>
                        <div className="modal-body">
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

export default AddDrinkModal