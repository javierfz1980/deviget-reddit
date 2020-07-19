import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './PostsList.module.scss';
import { PostListItem } from './PostListItem/PostListItem';
import { SinglePostItem } from '../../models';
import { ListGroup } from 'react-bootstrap';
import { ACTION_TYPES, ActionDispatcher } from '../../store/actions';
import { PostsListHeader } from './PostsListHeader/PostsListHeader';
import { Loading } from '../Loading';
import { NoContent } from '../NoContent';

interface Props {
  onItemSelected: () => void;
}

export function PostsList({ onItemSelected }: Props) {
  const dispatch = useDispatch();
  const { posts, initialized, hasMore, dismissed } = useSelector(({ redditState }) => redditState);
  const next = fetchPosts(dismissed, dispatch);

  if (!initialized) {
    dispatch({ type: ACTION_TYPES.FETCH_POSTS });
  }

  return (
    <div className={styles.infiniteContainer} id="scrollableDiv">
      <InfiniteScroll
        dataLength={posts?.length || 0}
        next={next}
        hasMore={hasMore}
        loader={
          !dismissed && (
            <div className={styles.loading}>
              <Loading />
            </div>
          )
        }
        endMessage={<h5 className={styles.eof}>No more results...</h5>}
        scrollableTarget="scrollableDiv">
        <div>
          <ListGroup className={styles.listGroup}>
            <ListGroup.Item className={`${styles.listItem}`}>
              <PostsListHeader />
            </ListGroup.Item>
            <TransitionGroup>
              {posts &&
                posts.map(item => (
                  <CSSTransition key={item.id} timeout={500} classNames="item">
                    <ListGroup.Item className={styles.listItem}>
                      <PostListItem item={item as SinglePostItem} onItemSelected={onItemSelected} />
                    </ListGroup.Item>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ListGroup>
          {!posts?.length && (
            <h3 className={styles.noConents}>
              <NoContent />
            </h3>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

function fetchPosts(dismissed: boolean, dispatch: ActionDispatcher) {
  return () => {
    if (!dismissed) {
      dispatch({ type: ACTION_TYPES.FETCH_POSTS });
    }
  };
}
