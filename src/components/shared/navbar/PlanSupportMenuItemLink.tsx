import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';
import { PlanSupportMenuItem } from './PlanAndSupportMenu';

const PlanSupportMenuItemLink = ({
  href,
  title,
  Icon,
  setMenuDropdownId,
}: PlanSupportMenuItem & { setMenuDropdownId: (id: string | null) => void }) => (
  <li>
    <Link
      href={href}
      onClick={() => setMenuDropdownId(null)}
      className="group/item relative flex items-center gap-3 rounded-2xl p-3">
      <HoverBgTransform className="group-hover/item:bg-ns-ivory/80 rounded-2xl group-hover/item:opacity-100" />
      <div className="border-stroke-10 shadow-14 relative z-10 mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg border bg-white p-1">
        <Icon className="size-5" />
      </div>
      <div className="relative z-10">
        <p className="text-tagline-1 text-secondary font-normal">{title}</p>
      </div>
    </Link>
  </li>
);

PlanSupportMenuItemLink.displayName = 'PlanSupportMenuItemLink';
export default PlanSupportMenuItemLink;
