'use client';

import type { Post } from '@/db/schema';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { createPostAction, updatePostAction, type PostFormState } from '../actions/posts';

const SaveButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="admin-btn admin-btn-primary" disabled={pending}>
      {pending ? 'Saving…' : label}
    </button>
  );
};

const PostForm = ({ post }: { post?: Post }) => {
  const isEdit = Boolean(post);
  const action = isEdit ? updatePostAction : createPostAction;
  const [state, formAction] = useActionState<PostFormState, FormData>(action, {});

  // Mirror the title into the slug field until the author edits the slug themselves.
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [slug, setSlug] = useState(post?.slug ?? '');

  const autoSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/['’]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  return (
    <form action={formAction} className="admin-form">
      {isEdit && <input type="hidden" name="id" value={post!.id} />}

      {state.error && (
        <p className="admin-alert admin-alert-error" role="alert">
          {state.error}
        </p>
      )}

      <div className="admin-grid-2">
        <div className="admin-card admin-card-pad admin-form">
          <div className="admin-field">
            <label className="admin-label" htmlFor="title">
              Title *
            </label>
            <input
              id="title"
              name="title"
              required
              defaultValue={post?.title ?? ''}
              className="admin-input"
              placeholder="How explainer videos cut SaaS churn"
              onChange={(e) => {
                if (!slugTouched) {
                  setSlug(autoSlug(e.target.value));
                }
              }}
            />
          </div>

          <div className="admin-field">
            <label className="admin-label" htmlFor="slug">
              URL slug
            </label>
            <input
              id="slug"
              name="slug"
              value={slug}
              className="admin-input"
              placeholder="auto-generated from the title"
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
            />
            <span className="admin-hint">Public URL: /blog/{slug || 'your-post-slug'}</span>
          </div>

          <div className="admin-field">
            <label className="admin-label" htmlFor="description">
              Excerpt
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={post?.description ?? ''}
              className="admin-textarea"
              placeholder="One or two sentences shown on the blog listing card."
            />
          </div>

          <div className="admin-field">
            <label className="admin-label" htmlFor="content">
              Content (Markdown)
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={post?.content ?? ''}
              className="admin-textarea admin-textarea-tall"
              placeholder={'### Introduction\n\nWrite your post using Markdown…'}
            />
            <span className="admin-hint">Rendered with react-markdown — the same pipeline the existing posts use.</span>
          </div>
        </div>

        <div className="admin-form">
          <div className="admin-card admin-card-pad admin-form">
            <h2>Publishing</h2>
            <div className="admin-field">
              <label className="admin-label" htmlFor="status">
                Status
              </label>
              <select id="status" name="status" defaultValue={post?.status ?? 'draft'} className="admin-select">
                <option value="draft">Draft — hidden from the site</option>
                <option value="published">Published — live on /blog</option>
              </select>
            </div>
            <label className="admin-checkbox">
              <input type="checkbox" name="featured" defaultChecked={post?.featured ?? false} />
              Feature on the blog hero
            </label>
            <div className="admin-field">
              <label className="admin-label" htmlFor="publishDate">
                Display date
              </label>
              <input
                id="publishDate"
                name="publishDate"
                defaultValue={post?.publishDate ?? ''}
                className="admin-input"
                placeholder="Jan 28, 2025"
              />
              <span className="admin-hint">Free text — printed verbatim on the post.</span>
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="readTime">
                Read time
              </label>
              <input
                id="readTime"
                name="readTime"
                defaultValue={post?.readTime ?? ''}
                className="admin-input"
                placeholder="8 min read"
              />
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="tag">
                Tag
              </label>
              <input
                id="tag"
                name="tag"
                defaultValue={post?.tag ?? ''}
                className="admin-input"
                placeholder="marketing"
              />
            </div>
          </div>

          <div className="admin-card admin-card-pad admin-form">
            <h2>Author &amp; media</h2>
            <div className="admin-field">
              <label className="admin-label" htmlFor="author">
                Author name
              </label>
              <input id="author" name="author" defaultValue={post?.author ?? ''} className="admin-input" />
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="authorImage">
                Author image path
              </label>
              <input
                id="authorImage"
                name="authorImage"
                defaultValue={post?.authorImage ?? ''}
                className="admin-input"
                placeholder="/images/ns-avatar-3.png"
              />
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="thumbnail">
                Thumbnail path
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                defaultValue={post?.thumbnail ?? ''}
                className="admin-input"
                placeholder="/images/ns-img-435.png"
              />
              <span className="admin-hint">
                Drop the file into <code>public/images/</code> and reference it as <code>/images/name.png</code>.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-actions">
        <SaveButton label={isEdit ? 'Save changes' : 'Create post'} />
        <Link href="/admin/posts" className="admin-btn admin-btn-secondary">
          Cancel
        </Link>
        {isEdit && post?.status === 'published' && (
          <a
            href={`/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary">
            View live ↗
          </a>
        )}
      </div>
    </form>
  );
};

export default PostForm;
