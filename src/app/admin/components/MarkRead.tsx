'use client';

import { useEffect, useRef } from 'react';
import { markSubmissionReadAction } from '../actions/submissions';

/**
 * Marks an enquiry read once the detail page is open. Done from the client
 * rather than during render so the action can call revalidatePath() and the
 * sidebar's unread badge updates in the same pass.
 */
const MarkRead = ({ id }: { id: number }) => {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) {
      return;
    }
    fired.current = true;
    void markSubmissionReadAction(id);
  }, [id]);

  return null;
};

export default MarkRead;
