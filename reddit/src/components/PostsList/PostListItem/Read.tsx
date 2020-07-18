import React from 'react';
import { Badge } from 'react-bootstrap';

export function Read({ read }: { read: boolean }) {
  return !read ? <Badge variant="danger">unread</Badge> : <></>;
}
