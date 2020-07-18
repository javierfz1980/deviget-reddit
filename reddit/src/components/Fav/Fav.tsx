import React from 'react';
import { BookmarkPlus } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { SinglePostItem } from '../../models';
import { ACTION_TYPES } from '../../store/actions';

interface Props {
  item: SinglePostItem;
}

export function Fav({ item }: Props) {
  const dispatch = useDispatch();
  const favs = useSelector(({ redditState }) => redditState.favs);
  const isInFavs = favs.some(fav => fav.id === item.id);
  const text = isInFavs ? 'Remove' : 'Add';
  const variant = isInFavs ? 'danger' : 'primary';
  const click = () =>
    isInFavs
      ? dispatch({ type: ACTION_TYPES.REMOVE_FROM_FAVS, payload: item })
      : dispatch({ type: ACTION_TYPES.ADD_TO_FAVS, payload: item });

  return (
    <Button variant={variant} size="sm" onClick={click}>
      <BookmarkPlus /> {text}
    </Button>
  );
}
