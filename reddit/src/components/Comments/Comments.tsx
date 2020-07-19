import React from 'react';
import { Pen } from 'react-bootstrap-icons';

export function Comments({ comments }: { comments: number }) {
  return (
    <>
      <Pen /> {comments}
    </>
  );
}
