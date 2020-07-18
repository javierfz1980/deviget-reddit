import React, { Dispatch, SetStateAction, useState } from 'react';
import { TrashFill } from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { ACTION_TYPES, ActionDispatcher } from '../../store/actions';

interface Props {
  itemId: number;
}

export function Delete({ itemId }: Props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);

  const close = handleClose(setShow);
  const confirm = handleConfirm(dispatch, setShow, itemId);
  const openModal = handleOpenModal(setShow);

  return (
    <>
      <Button variant="danger" size="sm" onClick={openModal}>
        <TrashFill /> Delete
      </Button>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please confirm you want to remove item from list!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={confirm}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function handleClose(setShow: any) {
  return () => setShow(false);
}

function handleConfirm(dispatch: ActionDispatcher, setShow: Dispatch<SetStateAction<boolean>>, itemId: number) {
  return () => {
    dispatch({ type: ACTION_TYPES.REMOVE_POST, payload: itemId });
    setShow(false);
  };
}

function handleOpenModal(setShow: Dispatch<SetStateAction<boolean>>) {
  return e => {
    e.stopPropagation();
    setShow(true);
  };
}
