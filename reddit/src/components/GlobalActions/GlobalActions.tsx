import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './GlobalActions.module.scss';
import { Button } from 'react-bootstrap';
import { ACTION_TYPES } from '../../store/actions';

export function GlobalActions() {
  const dispatch = useDispatch();

  return (
    <div className={styles.globalActionsWrapper}>
      <Button variant="warning" size="sm" onClick={() => dispatch({ type: ACTION_TYPES.RESET_STATE })}>
        Fetch & Restore
      </Button>
      <Button variant="danger" size="sm" onClick={() => dispatch({ type: ACTION_TYPES.DELETE_ALL_POSTS })}>
        Delete All Posts
      </Button>
    </div>
  );
}
