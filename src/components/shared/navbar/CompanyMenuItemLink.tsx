import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

interface CompanyMenuItemLinkProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  showDivider: boolean;
  setMenuDropdownId: (id: string | null) => void;
}

const CompanyMenuItemLink = ({
  href,
  title,
  description,
  icon,
  showDivider,
  setMenuDropdownId,
}: CompanyMenuItemLinkProps) => (
  <>
    <li className="group/item">
      <Link
        href={href}
        onClick={() => setMenuDropdownId(null)}
        className="relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
        <HoverBgTransform className="group-hover/item:bg-ns-ivory group-hover/item:opacity-100" />
        <div className="shadow-14 border-stroke-10 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3">
          {icon}
        </div>
        <div className="relative z-10">
          <p className="text-tagline-1 text-secondary font-normal">{title}</p>
          <p className="text-tagline-2 text-secondary/60 font-normal">{description}</p>
        </div>
      </Link>
    </li>
    {showDivider && (
      <li>
        <div className="bg-stroke-10/80 mx-auto h-px w-[calc(100%-16px)]" />
      </li>
    )}
  </>
);
CompanyMenuItemLink.displayName = 'CompanyMenuItemLink';
export default CompanyMenuItemLink;
