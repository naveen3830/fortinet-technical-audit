import React, { useState, useEffect } from 'react';
import { extractReportData } from './services/geminiService';
import { ReportData, EvaluationCategory, NextStepItem, LanguageData } from './types';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import LanguageDistributionChart from './components/LanguageDistributionChart';
import EvaluationTable from './components/EvaluationTable';
import NextStepsTable from './components/NextStepsTable';
import { GlobeAltIcon, DocumentTextIcon, CheckCircleIcon, ExclamationCircleIcon, ShieldCheckIcon } from './components/Icons';
import SeverityLegend from './components/SeverityLegend';

const App: React.FC = () => {
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await extractReportData();
        setReportData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load report data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-fortinet-light-grey text-slate-700">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-fortinet-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-lg">Loading Technical Health Report...</p>
        </div>
      </div>
    );
  }

  if (error || !reportData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-fortinet-light-grey text-red-600">
        <p className="text-xl">{error || 'No data available.'}</p>
      </div>
    );
  }

  const { title, source, overallScore, summaryMetrics, languageDistribution, evaluationCategories, nextSteps } = reportData;

  const getSummaryMetric = (label: string): string => summaryMetrics.find(m => m.label === label)?.value || 'N/A';

  return (
    <div className="min-h-screen bg-fortinet-light-grey text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header title={title} source={source} overallScore={overallScore} />

        <main className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-fortinet-red mb-4">Overall Website Status</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <SummaryCard title="Total Pages" value={getSummaryMetric('Total number of pages')} icon={<DocumentTextIcon />} />
              <SummaryCard title="Indexed Pages" value={getSummaryMetric('# of Indexed pages')} icon={<CheckCircleIcon />} />
              <SummaryCard title="Non-Indexed Pages" value={getSummaryMetric('# of Non indexed pages')} icon={<ExclamationCircleIcon />} />
              <SummaryCard title="Domain Authority" value={getSummaryMetric('Domain authority')} icon={<ShieldCheckIcon />} />
              <SummaryCard title="Website URL" value={getSummaryMetric('Website url')} icon={<GlobeAltIcon />} isLink />
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
            <div className="lg:col-span-2">
              <section>
                <h2 className="text-2xl font-bold text-fortinet-red mb-4">Evaluation Categories</h2>
                <div className="space-y-6">
                  {evaluationCategories.map((category: EvaluationCategory) => (
                    <EvaluationTable key={category.category} category={category} />
                  ))}
                </div>
              </section>
            </div>
            <div className="lg:col-span-1 space-y-8">
               <section>
                <h2 className="text-2xl font-bold text-fortinet-red mb-4">Language Distribution</h2>
                <LanguageDistributionChart data={languageDistribution} />
              </section>
              <section>
                <SeverityLegend />
              </section>
            </div>
          </div>
          
          <section>
            <h2 className="text-2xl font-bold text-fortinet-red mb-4">Actionable Next Steps</h2>
            <NextStepsTable steps={nextSteps} />
          </section>

        </main>
      </div>
    </div>
  );
};

export default App;