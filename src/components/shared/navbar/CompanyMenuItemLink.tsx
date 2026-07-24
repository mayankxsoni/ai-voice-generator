import Link from 'next/link';

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
        className="relative flex items-start gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-primary-50/50">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#eef0f3] bg-white text-secondary/70 shadow-2xs transition-all duration-300 group-hover/item:border-primary-300 group-hover/item:text-primary-500 group-hover/item:shadow-sm">
          {icon}
        </div>
        <div className="relative z-10">
          <p className="text-base font-bold text-secondary transition-colors duration-300 group-hover/item:text-primary-500">
            {title}
          </p>
          <p className="mt-0.5 text-xs font-normal text-secondary/60 leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </li>
    {showDivider && (
      <li className="my-1">
        <div className="mx-auto h-px w-full bg-[#f0f2f6]" />
      </li>
    )}
  </>
);

CompanyMenuItemLink.displayName = 'CompanyMenuItemLink';
export default CompanyMenuItemLink;
