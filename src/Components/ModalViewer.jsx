import * as React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";

function ModalViewer(props) {

  return (
    <Modal
        onClose={() => props.setIsOpen(false)}
        closeable
        isOpen={props.isOpen}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
        >
        <ModalHeader>{props?.header || ""}</ModalHeader>
        <ModalBody> {props?.body || ""} </ModalBody>
        <ModalFooter>
            <ModalButton kind={ButtonKind.tertiary} onClick={e=>{props.OnModalCancel(true); props.setIsOpen(false)}} disabled={props?.disabledCancel}> Cancel </ModalButton>
            <ModalButton onClick={e=>{props.OnModalOkay(true); props.setIsOpen(false)}} disabled={props?.disabledOkay}>Okay</ModalButton>
        </ModalFooter>
    </Modal>
  )
}

export default ModalViewer