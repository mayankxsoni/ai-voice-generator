import { ISocialLinks } from '@/interface';
import Link from 'next/link';

const SocialLinkV2 = ({ SocialLinks }: { SocialLinks: ISocialLinks }) => {
  return (
    <div className="flex items-center gap-2">
      {/* facebook  */}
      <Link
        href={SocialLinks?.facebook || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="border-accent/10 dark:border-stroke-7 hover:bg-background-1 dark:hover:bg-accent group flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-500 ease-in-out hover:-translate-y-2"
        aria-label="Follow Darrell Steward on Facebook">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            focusable="false">
            <path
              d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
              fill=""
              className="fill-accent dark:fill-accent/60 group-hover:fill-secondary transition-all duration-500 ease-in-out group-hover:dark:fill-black"
            />
          </svg>
        </span>
      </Link>
      {/* dribble  */}
      <Link
        href={SocialLinks?.instagram || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="border-accent/10 dark:border-stroke-7 hover:bg-background-1 dark:hover:bg-accent group flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-500 ease-in-out hover:-translate-y-2"
        aria-label="Follow Darrell Steward on Dribbble">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            focusable="false">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25ZM15.7795 5.28335C16.8235 6.55504 17.4499 8.17787 17.4688 9.93355C17.2221 9.88614 14.7546 9.38313 12.2682 9.69632C12.2112 9.57295 12.1638 9.44005 12.1068 9.30722C11.955 8.94661 11.7842 8.57648 11.6133 8.22534C14.3655 7.1055 15.6182 5.49214 15.7795 5.28335ZM10 2.54067C11.898 2.54067 13.6347 3.25244 14.9539 4.41974C14.821 4.60955 13.6917 6.11849 11.0344 7.11496C9.81018 4.86578 8.45311 3.02468 8.24431 2.73997C8.8042 2.6071 9.39264 2.54067 10 2.54067ZM6.8208 3.24295C7.02008 3.50868 8.34871 5.35927 9.59192 7.56099C6.09951 8.49106 3.01519 8.47209 2.68303 8.47209C3.16703 6.15645 4.73292 4.22993 6.8208 3.24295ZM2.52169 10.0095C2.52169 9.93355 2.52169 9.85765 2.52169 9.78174C2.84436 9.7912 6.46963 9.83867 10.1993 8.71884C10.4176 9.13637 10.6169 9.56343 10.8067 9.99048C10.7118 10.019 10.6074 10.0475 10.5125 10.0759C6.65944 11.3191 4.60955 14.7166 4.43872 15.0013C3.25244 13.6822 2.52169 11.9265 2.52169 10.0095ZM10 17.4783C8.27275 17.4783 6.67842 16.8899 5.41621 15.9029C5.54908 15.6277 7.06749 12.7047 11.2812 11.2338C11.3001 11.2242 11.3097 11.2242 11.3286 11.2148C12.382 13.9384 12.8091 16.2256 12.923 16.8804C12.0214 17.2695 11.0344 17.4783 10 17.4783ZM14.1662 16.1971C14.0903 15.7416 13.6917 13.5588 12.7142 10.8731C15.0583 10.503 17.1082 11.1104 17.3644 11.1958C17.0418 13.2741 15.846 15.0678 14.1662 16.1971Z"
              fill=""
              className="fill-accent dark:fill-accent/60 group-hover:fill-secondary transition-all duration-500 ease-in-out group-hover:dark:fill-black"
            />
          </svg>
        </span>
      </Link>
      {/* github */}
      <Link
        href={SocialLinks?.youtube || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="border-accent/10 dark:border-stroke-7 hover:bg-background-1 dark:hover:bg-accent group flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-500 ease-in-out hover:-translate-y-2"
        aria-label="Follow Darrell Steward on GitHub">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            focusable="false">
            <path
              d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"
              fill=""
              className="fill-accent dark:fill-accent/60 group-hover:fill-secondary transition-all duration-500 ease-in-out group-hover:dark:fill-black"
            />
          </svg>
        </span>
      </Link>
      {/* linkedin  */}
      <Link
        href={SocialLinks?.linkedin || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="border-accent/10 dark:border-stroke-7 hover:bg-background-1 dark:hover:bg-accent group flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-500 ease-in-out hover:-translate-y-2"
        aria-label="Follow Darrell Steward on LinkedIn">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            focusable="false">
            <path
              d="M10.0007 1C6.35854 1 3.07729 3.19375 1.6851 6.55469C0.292911 9.91562 1.06166 13.7875 3.6351 16.3609C6.20854 18.9344 10.0804 19.7031 13.4413 18.3109C16.807 16.9234 19.0007 13.6422 19.0007 10C19.0007 5.03125 14.9695 1 10.0007 1ZM7.3851 14.7391H5.42104V8.41094H7.3851V14.7391ZM6.40072 7.54844C5.93666 7.54844 5.51947 7.27187 5.34135 6.84531C5.16322 6.41875 5.25697 5.92656 5.5851 5.59844C5.90854 5.27031 6.40072 5.17188 6.82729 5.34531C7.25385 5.51875 7.5351 5.93594 7.53979 6.39531C7.53979 7.03281 7.03354 7.54375 6.40072 7.54844ZM14.7398 14.7391H12.7757V11.6594C12.7757 10.9234 12.7617 9.98594 11.7538 9.98594C10.746 9.98594 10.5679 10.7828 10.5679 11.6078V14.7391H8.61322V8.41094H10.4976V9.27344H10.5257C10.7882 8.77656 11.4257 8.25156 12.382 8.25156C14.3695 8.25156 14.7351 9.55937 14.7351 11.2609V14.7391H14.7398Z"
              fill=""
              className="fill-accent dark:fill-accent/60 group-hover:fill-secondary transition-all duration-500 ease-in-out group-hover:dark:fill-black"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default SocialLinkV2;
