'use client';
import { ICustomer } from '@/interface';
import Image from 'next/image';
import { createRef, useEffect, useMemo, useState, type RefObject } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import Dropdown, { dropdownData, FilterKey } from './Dropdown';

type FilterState = Record<FilterKey, string>;

const ShowCards = ({ storiesData }: { storiesData: ICustomer[] }) => {
  const getInitialFilters = (): FilterState =>
    dropdownData.reduce((acc, config) => {
      acc[config.id] = 'all';
      return acc;
    }, {} as FilterState);

  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const [filters, setFilters] = useState<FilterState>(getInitialFilters);

  const dropdownRefs = useMemo(() => {
    return dropdownData.reduce(
      (acc, config) => {
        acc[config.id] = createRef<HTMLDivElement>();
        return acc;
      },
      {} as Record<FilterKey, RefObject<HTMLDivElement | null>>,
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!openDropdown) {
        return;
      }
      const target = event.target as Node;
      const ref = dropdownRefs[openDropdown];
      if (ref?.current && !ref.current.contains(target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRefs, openDropdown]);

  const toggleDropdown = (name: FilterKey) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleOptionSelect = (filterType: FilterKey, value: string) => {
    setFilters(
      dropdownData.reduce((acc, config) => {
        acc[config.id] = config.id === filterType ? value : 'all';
        return acc;
      }, {} as FilterState),
    );
    setOpenDropdown(null);
  };

  const optionCounts = useMemo(() => {
    const countsRecord = {} as Record<FilterKey, Record<string, number>>;

    for (const config of dropdownData) {
      const counts: Record<string, number> = {};
      for (const option of config.options) {
        if (option.value === 'all') {
          counts[option.value] = storiesData.length;
          continue;
        }

        counts[option.value] = storiesData.filter((story: ICustomer) => story[config.id] === option.value).length;
      }
      countsRecord[config.id] = counts;
    }

    return countsRecord;
  }, [storiesData]);

  const matchesFilters = (story: ICustomer, currentFilters: FilterState) => {
    for (const key of Object.keys(currentFilters) as FilterKey[]) {
      const filterValue = currentFilters[key];
      if (filterValue !== 'all' && story[key] !== filterValue) {
        return false;
      }
    }
    return true;
  };

  const filteredStories = useMemo(
    () => storiesData.filter((story: ICustomer) => matchesFilters(story, filters)),
    [filters, storiesData],
  );

  return (
    <section className="max-sm:overflow-x-hidden max-sm:overflow-y-auto" aria-label="customer success stories section">
      <div className="main-container space-y-14">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 max-lg:justify-center md:gap-3">
            {dropdownData.map((config, index) => (
              <Dropdown
                key={config.id}
                config={config}
                isOpen={openDropdown === config.id}
                selectedValue={filters[config.id]}
                onToggle={() => toggleDropdown(config.id)}
                onSelect={(value) => handleOptionSelect(config.id, value)}
                optionCounts={optionCounts[config.id]}
                delay={0.1 * (index + 1)}
                containerRef={dropdownRefs[config.id]}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredStories.map((story: ICustomer, index: number) => {
              const delay = 0.1 + (index % 4) * 0.1;
              return (
                <RevealAnimation key={story.slug} delay={delay}>
                  <div
                    className="border-stroke-10 space-y-6 rounded-[20px] border bg-white p-8"
                    data-industry={story.industry}
                    data-product={story.product}
                    data-service={story.service}
                    data-solution={story.solution}>
                    <figure className="w-[123px]">
                      <Image
                        src={story.lightImage}
                        alt={story.alt}
                        width={123}
                        height={123}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    <div className="space-y-13">
                      <p className="text-tagline-1">{story.description}</p>
                      <div>
                        <LinkButton
                          href={`/customer/${story.slug}`}
                          btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
                          Read more
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
          {filteredStories.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-secondary">No stories match your selection.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ShowCards.displayName = 'ShowCards';
export default ShowCards;
