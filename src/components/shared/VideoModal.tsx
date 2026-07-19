'use client';
import { useModalContext } from '@/context/ModalContext';
import { MouseEvent } from 'react';

const VideoModal = () => {
  const { videoModal } = useModalContext();

  const handleOverlayClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      videoModal.closeModal();
    }
  };

  return (
    <dialog
      ref={videoModal.modalRef}
      className="modal-overlay modal-close fixed top-0 left-0 !z-[9999] h-full w-full bg-black/95"
      onClick={handleOverlayClick}>
      <div
        ref={videoModal.contentRef}
        className="modal-content fixed top-1/2 left-1/2 h-full max-h-[30%] w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] max-[400px]:max-h-[20%] max-[400px]:max-w-[90%] max-[400px]:rounded-2xl sm:max-h-[400px] md:max-h-[450px] lg:max-h-[600px] lg:max-w-[1000px]">
        <iframe
          className="h-full w-full rounded-[20px] max-[400px]:rounded-2xl"
          src="https://www.youtube.com/embed/G_noAxwVpnA?list=PLe6YKWr4VVM1x2LIpiqmVvG4QgIvoDEdO"
          title="Copyright-free music upbeat | Copyright-free nature music for videos | Copyright nature videos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <button
          onClick={videoModal.closeModal}
          className="modal-close-btn dark:bg-background-5 absolute -top-8 -right-8 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white max-[400px]:-top-4 max-[400px]:-right-4 dark:text-white"
          aria-label="Close modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </dialog>
  );
};

VideoModal.displayName = 'VideoModal';
export default VideoModal;
