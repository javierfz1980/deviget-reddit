import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './PostsList.module.scss';
import { PostListItem } from './PostListItem/PostListItem';
import { SinglePostItem } from '../../models';
import { ListGroup } from 'react-bootstrap';
import { ACTION_TYPES, ActionDispatcher } from '../../store/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ListHeader } from './PostListItem/ListHeader/ListHeader';
import { Loading } from '../Loading';
import { NoContent } from '../NoContent';

export function PostsList() {
  const dispatch = useDispatch();
  const { posts, initialized, hasMore, dismissed } = useSelector(({ redditState }) => redditState);
  const next = fetchPosts(dismissed, dispatch);

  if (!initialized) {
    dispatch({ type: ACTION_TYPES.FETCH_POSTS });
  }
  console.log(!posts || !posts.length);
  return (
    <div className={styles.infiniteContainer} id="scrollableDiv">
      <InfiniteScroll
        dataLength={posts?.length || 0}
        next={next}
        hasMore={hasMore}
        loader={
          <div className={styles.loading}>
            <Loading />
          </div>
        }
        endMessage={<h5 className={styles.eof}>No more results...</h5>}
        scrollableTarget="scrollableDiv">
        <div>
          <ListGroup className={styles.listGroup}>
            <TransitionGroup>
              <ListGroup.Item className={`${styles.listItem}`}>
                <ListHeader />
              </ListGroup.Item>
              {posts &&
                posts.map((item, idx) => (
                  <CSSTransition key={item.id} timeout={500 * idx} classNames="item">
                    <ListGroup.Item className={styles.listItem}>
                      <PostListItem item={item as SinglePostItem} />
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
