'use client';

import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Pagination from '../shared/Pagination';
import LinkButton from '../ui/button/Button';

const CaseStudyPaginationWrapper = ({ caseStudies }: { caseStudies: ICaseStudy[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const caseStudiesPerPage = 3;

  // Calculate pagination
  const totalPages = Math.ceil(caseStudies.length / caseStudiesPerPage);
  const startIndex = (currentPage - 1) * caseStudiesPerPage;
  const endIndex = startIndex + caseStudiesPerPage;
  const currentCaseStudies = caseStudies?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Case Study Cards */}
      <div className="grid grid-cols-12 items-start justify-center gap-8">
        {currentCaseStudies?.map((caseStudy, index) => (
          <RevealAnimation delay={0.2 + index * 0.1} key={caseStudy.slug}>
            <article
              className="group col-span-12 max-w-[409px] md:col-span-6 lg:col-span-4"
              itemScope
              itemType="http://schema.org/Article">
              <div className="bg-background-1 border-stroke-10 scale-100 rounded-[20px] border-3 transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500">
                <figure className="h-[260px] max-w-[409px] overflow-hidden rounded-t-[20px]">
                  <Link href={`/case-study/${caseStudy.slug}`}>
                    <Image
                      src={caseStudy.thumbnail}
                      alt="Case study thumbnail"
                      width={409}
                      height={260}
                      className="size-full object-cover"
                    />
                  </Link>
                </figure>
                {/* content  */}
                <div className="space-y-6 p-6">
                  <div className="space-y-2">
                    <Link href={`/case-study/${caseStudy.slug}`}>
                      <h3 className="text-heading-5 line-clamp-2" itemProp="headline">
                        {caseStudy.title}
                      </h3>
                      <div className="space-y-2">
                        <p itemProp="description" className="line-clamp-2">
                          {caseStudy.description}
                        </p>
                        <p>
                          <span className="text-secondary font-medium">Results: </span>
                          {caseStudy.result}
                        </p>
                      </div>
                    </Link>
                  </div>
                  {/* btn  */}
                  <div>
                    <LinkButton
                      href={`/case-study/${caseStudy.slug}`}
                      btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
                      Read more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </article>
          </RevealAnimation>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.5}>
            <Pagination
              totalItems={caseStudies.length}
              itemsPerPage={caseStudiesPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="mt-14"
            />
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

CaseStudyPaginationWrapper.displayName = 'CaseStudyPaginationWrapper';
export default CaseStudyPaginationWrapper;
