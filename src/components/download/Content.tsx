import { AndroidIcon, ChromeExtensionIcon, DownloadIcon, IphoneIcon, SafariIcon, WindowsIcon } from '@/icons';
import iosIcon from '@public/images/ns-img-384.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  icon?: FC<{ className?: string }>;
  iconClassName?: string;
  image?: StaticImageData;
  imageAlt?: string;
  instant?: boolean;
}

const downloadItems: DownloadItem[] = [
  {
    id: '1',
    title: 'MacOS intel',
    description: 'Download for macOS intel processor',
    icon: IphoneIcon,
    iconClassName: 'fill-secondary size-6',
    instant: true,
  },
  {
    id: '2',
    title: 'MacOS apple silicon',
    description: 'Download for macOS intel processor',
    icon: IphoneIcon,
    iconClassName: 'fill-secondary size-6',
  },
  {
    id: '3',
    title: 'macOS apple silicon',
    description: 'Download for macOS Apple silicon Processor (M series).',
    icon: IphoneIcon,
    iconClassName: 'fill-secondary size-6',
  },
  {
    id: '4',
    title: 'iPhone app',
    description: 'Download for macOS intel processor',
    image: iosIcon,
    imageAlt: 'iPhone app',
  },
  {
    id: '5',
    title: 'Android',
    description: 'Get the app for Android devices.',
    icon: AndroidIcon,
    iconClassName: 'size-6',
  },
  {
    id: '6',
    title: 'Windows',
    description: 'Get the installer for Windows operating systems.',
    icon: WindowsIcon,
    iconClassName: 'size-6',
  },
  {
    id: '7',
    title: 'Chrome extension',
    description: 'Install our chrome extension to clip web content and sync your kindle library',
    icon: ChromeExtensionIcon,
    iconClassName: 'size-6',
  },
  {
    id: '8',
    title: 'Safari extension',
    description: 'Install our safari extension to clip web content and sync your kindle library.',
    icon: SafariIcon,
    iconClassName: 'size-6',
  },
];

const Content = () => {
  return (
    <section className="pb-16 lg:pb-20 xl:pb-28">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[652px] space-y-2">
          {downloadItems.map((item, index) => {
            const delay = (index + 1) * 0.1;
            const IconComponent = item.icon;

            return (
              <RevealAnimation key={item.id} delay={delay} instant={item.instant}>
                <div className="bg-ns-ivory flex items-center justify-between rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-x-3">
                    <figure className="flex size-13 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                      {item.image && <Image src={item.image} alt={item.imageAlt || 'ios-icon'} />}
                      {!item.image && IconComponent && <IconComponent className={item.iconClassName} />}
                    </figure>
                    <div>
                      <p className="text-secondary">{item.title}</p>
                      <p className="text-tagline-2">{item.description}</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      download
                      href="#"
                      className="flex size-10 shrink-0 items-center justify-center p-2.5 sm:size-11">
                      <span className="sr-only">Download</span>
                      <DownloadIcon className="fill-secondary size-6" />
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
