'use client';

import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Blog & Articles"
            subtitle="No posts published yet"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Blog Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;ll add my blog link here in a future update.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
