// crypto marketing resources menu
import { BlogIcon, FaqIcon, GlossaryIcon, SuccessStoriesIcon, SupportIcon, TutorialIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import CompanyMenuItemLink from './CompanyMenuItemLink';

type ResourcesMenuItem = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const resourcesMenuItems: ResourcesMenuItem[] = [
  {
    href: '/blog',
    title: 'Blog',
    description: 'Latest articles and insights',
    icon: <BlogIcon />,
  },
  {
    href: '/tutorial',
    title: 'Tutorial',
    description: 'Step-by-step guides and tips',
    icon: <TutorialIcon />,
  },
  {
    href: '/faq',
    title: 'FAQ',
    description: 'Common questions answered',
    icon: <FaqIcon />,
  },
  {
    href: '/glossary',
    title: 'Glossary',
    description: 'Terms and definitions',
    icon: <GlossaryIcon />,
  },
  {
    href: '/support',
    title: 'Support',
    description: 'Get help and assistance',
    icon: <SupportIcon />,
  },
  {
    href: '/success-stories',
    title: 'Success Stories',
    description: 'Latest updates and changes',
    icon: <SuccessStoriesIcon />,
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="resources-dropdown-menu"
        className={cn(
          'shadow-14 border-stroke-10 absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 space-y-1 rounded-3xl border bg-white p-3 transition-all duration-300',
          // when hover show the menu
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {resourcesMenuItems.map((item, index) => (
          <CompanyMenuItemLink
            key={item.href}
            {...item}
            showDivider={index < resourcesMenuItems.length - 1}
            setMenuDropdownId={setMenuDropdownId}
          />
        ))}
      </ul>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
