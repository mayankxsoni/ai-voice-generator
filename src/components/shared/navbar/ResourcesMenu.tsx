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
          'fixed top-full left-1/2 z-40 h-4 w-full max-w-[340px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="resources-dropdown-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden w-[340px] -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[340px] rounded-[28px] border border-secondary/10 bg-white p-5 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <p className="mb-3 text-sm font-semibold text-secondary/40">Resources</p>
          <ul className="space-y-1">
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
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
