import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { EmptyFunction } from "./default";

function ModalViewer({
  isOpen,
  setIsOpen,
  header = `I'm your "Header"`,
  body = `Body goes here!!!`,
  OnModalCancel = EmptyFunction,
  OnModalOkay = EmptyFunction,
  disabledCancel = false,
  disabledOkay = false,
}) {
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>{header || ""}</ModalHeader>
      <ModalBody> {body || ""} </ModalBody>
      <ModalFooter>
        <ModalButton
          kind={ButtonKind.tertiary}
          onClick={(e) => {
            OnModalCancel(true);
            setIsOpen(false);
          }}
          disabled={disabledCancel}
        >
          {" "}
          Cancel{" "}
        </ModalButton>
        <ModalButton
          onClick={(e) => {
            OnModalOkay(true);
            setIsOpen(false);
          }}
          disabled={disabledOkay}
        >
          Okay
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default ModalViewer;
