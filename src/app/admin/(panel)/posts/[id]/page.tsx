import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import PostForm from '../../../components/PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    notFound();
  }

  const post = (await db.select().from(posts).where(eq(posts.id, id)).limit(1))[0];
  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Edit post</h1>
          <p>/blog/{post.slug}</p>
        </div>
      </div>
      <PostForm post={post} />
    </>
  );
}
