import PostForm from '../../../components/PostForm';

export default function NewPostPage() {
  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>New post</h1>
          <p>Drafts stay hidden until you set the status to Published.</p>
        </div>
      </div>
      <PostForm />
    </>
  );
}
