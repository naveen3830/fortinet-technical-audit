
import { ReportData, BragStatus } from '../types';

// This is a mock data object that simulates the JSON output 
// we would expect from the Gemini API after it processes the report image.
const mockReportData: ReportData = {
  title: "Fortinet - Website Technical Health Report, July-25",
  source: "Sitemap/GSC",
  overallScore: "B",
  summaryMetrics: [
    { label: "Website url", value: "www.fortinet.com" },
    { label: "Total number of pages", value: "28170" },
    { label: "Blog Pages", value: "3063" },
    { label: "# of Indexed pages", value: "31700" },
    { label: "# of Non indexed pages", value: "85200" },
    { label: "Domain authority", value: "83" },
  ],
  languageDistribution: [
    { name: "English (UK)", pages: 2149 },
    { name: "Italian", pages: 2202 },
    { name: "French", pages: 2219 },
    { name: "Portuguese", pages: 2228 },
    { name: "Chinese", pages: 2198 },
    { name: "Taiwanese", pages: 2238 },
    { name: "Korean", pages: 2386 },
    { name: "German", pages: 2205 },
    { name: "Japanese", pages: 2861 },
    { name: "Spanish", pages: 2255 },
  ],
  evaluationCategories: [
    {
      category: "Performance & Core Web Vitals",
      items: [
        { parameter: "Website performance on desktop", expectedOutcome: "Score > 80", status: "56", brag: BragStatus.Bad, remarks: "" },
        { parameter: "Website performance on mobile", expectedOutcome: "Score > 70", status: "43", brag: BragStatus.Bad, remarks: "" },
        { parameter: "Core Web Vitals on desktop", expectedOutcome: "Pass", status: "Fail", brag: BragStatus.Bad, remarks: "" },
        { parameter: "Core Web Vitals on mobile", expectedOutcome: "Pass", status: "Fail", brag: BragStatus.Bad, remarks: "" },
        { parameter: "Accessibility Score", expectedOutcome: "Score > 90", status: "69", brag: BragStatus.Bad, remarks: "" },
        { parameter: "SEO Score", expectedOutcome: "Score > 90", status: "85", brag: BragStatus.NeedsAttention, remarks: "" },
        { parameter: "Mobile friendliness", expectedOutcome: "Pass", status: "Pass", brag: BragStatus.Good, remarks: "" },
      ],
    },
    {
      category: "Crawling & Indexing",
      items: [
        { parameter: "Indexed pages", expectedOutcome: "All active pages are indexed", status: "31.7k", brag: BragStatus.Info, remarks: "" },
        { parameter: "Non indexed pages", expectedOutcome: "No active pages are in no index state", status: "85.2k", brag: BragStatus.Bad, remarks: "URLs with dynamic pages & utm parameters. Found 10 English pages & 177 Non english relevant pages eligible for indexing." },
        { parameter: "Robots.txt file optimization", expectedOutcome: "Optimized", status: "Optimized", brag: BragStatus.Good, remarks: "" },
        { parameter: "Sitemap file optimization", expectedOutcome: "All active website URL's are part of sitemap", status: "Optimized", brag: BragStatus.Good, remarks: "" },
      ],
    },
    {
      category: "Site Health & Structure",
      items: [
        { parameter: "Broken internal links (404)", expectedOutcome: "0 broken links", status: "527", brag: BragStatus.Bad, remarks: "Link", remarkLink: "#" },
        { parameter: "Broken external links", expectedOutcome: "0 broken links", status: "658", brag: BragStatus.Bad, remarks: "Link", remarkLink: "#" },
        { parameter: "Broken backlinks", expectedOutcome: "0 broken backlinks", status: "4099", brag: BragStatus.Bad, remarks: "Link", remarkLink: "#" },
        { parameter: "Orphan page", expectedOutcome: "No orphan page", status: "0", brag: BragStatus.Good, remarks: "" },
        { parameter: "Canonical Errors", expectedOutcome: "No page with canonical error", status: "10", brag: BragStatus.NeedsAttention, remarks: "Link", remarkLink: "#" },
        { parameter: "Information architecture", expectedOutcome: "Site structure & navigation is well defined & easy to understand", status: "Good", brag: BragStatus.Good, remarks: "" },
        { parameter: "Header tags structure", expectedOutcome: "Content structure is well-defined and easy to understand", status: "3649", brag: BragStatus.Bad, remarks: "Header structure hierarchy incorrect", remarkLink: "https://www.fortinet.com/bl" },
      ],
    },
    {
        category: "Link Profile & Authority",
        items: [
            { parameter: "Backlinks", expectedOutcome: "# of backlinks", status: "277,348", brag: BragStatus.Info, remarks: ""},
            { parameter: "Domain authority", expectedOutcome: "DA > 70", status: "83", brag: BragStatus.Good, remarks: ""},
            { parameter: "Spam Score", expectedOutcome: "Score < 5", status: "2%", brag: BragStatus.Good, remarks: ""},
        ]
    },
    {
        category: "Metadata & Schema",
        items: [
            { parameter: "Duplicate content", expectedOutcome: "Minimal or no pages with issues", status: "0", brag: BragStatus.Good, remarks: ""},
            { parameter: "Img alt tag", expectedOutcome: "Minimal or no pages with issues", status: "2225", brag: BragStatus.Bad, remarks: "Link", remarkLink: "#"},
            { parameter: "Duplicate & missing H1", expectedOutcome: "Minimal or no pages with issues", status: "Missing 3, Duplicate 23", brag: BragStatus.NeedsAttention, remarks: "Link", remarkLink: "#"},
            { parameter: "Duplicate & missing meta title", expectedOutcome: "Minimal or no pages with issues", status: "Missing 0, Duplicate 5", brag: BragStatus.NeedsAttention, remarks: "Link", remarkLink: "#"},
            { parameter: "Duplicate & missing description", expectedOutcome: "Minimal or no pages with issues", status: "Missing 33, Duplicate 1", brag: BragStatus.NeedsAttention, remarks: "Link", remarkLink: "#"},
            { parameter: "Schema Markup", expectedOutcome: "Schema implementation opportunities", status: "Organization, Website, ImageObject, etc.", brag: BragStatus.Good, remarks: "Opportunities for review rating"},
        ]
    }
  ],
  nextSteps: [
    { id: 1, task: "Improve website performance on mobile & desktop along with CVW & accessability sc", pages: "-", timeline: "4 weeks", owner: "Fortinet", remarks: "" },
    { id: 2, task: "Submitted the validated non indexed pages for indexing", pages: "177", timeline: "2 weeks", owner: "Fortinet", remarks: "" },
    { id: 3, task: "Fix broken internal links for english pages based on categories such as blogs & cybergl", pages: "527", timeline: "4 weeks", owner: "Fortinet", remarks: "In batches" },
    { id: 4, task: "Validate & fix broken external links, prioritizing english pages", pages: "658", timeline: "4 weeks", owner: "Fortinet", remarks: "In batches" },
    { id: 5, task: "Validate & set a 301 URL redirection for broken backlinks", pages: "476", timeline: "4 weeks", owner: "Fortinet", remarks: "" },
    { id: 6, task: "Fix the canonical for https://www.fortinet.com/resources/pharma for english & non-eng", pages: "10", timeline: "1 week", owner: "Fortinet", remarks: "" },
    { id: 7, task: "Fix the header structure hierarchy for the indentified pages post validation", pages: "3649", timeline: "4-6 weeks", owner: "Fortinet", remarks: "Conducted only for english pages" },
    { id: 8, task: "Fix missing, duplicate H1 & meta description", pages: "60", timeline: "1 Week", owner: "Fortinet", remarks: "" },
    { id: 9, task: "Identify pages for review rating schema can be implemented", pages: "-", timeline: "2 weeks", owner: "LW & Fortinet", remarks: "" },
    { id: 10, task: "Study the nonindexed pages for new URL patterns & disallow in the robots.txt file", pages: "85200", timeline: "4 weeks", owner: "LW & Fortinet", remarks: "In batches" },
  ],
};


/**
 * In a real application, this function would take image data as an argument.
 * It would then use the Gemini API to extract the report data in a structured JSON format.
 * 
 * We would define a `responseSchema` for the Gemini model to ensure the output
 * is consistent with our `ReportData` type.
 * 
 * For this demonstration, we are mocking the API call and returning pre-structured data.
 */
export const extractReportData = async (): Promise<ReportData> => {
  console.log("Simulating Gemini API call to extract report data...");
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real scenario, you would handle potential errors from the API call.
  // For example, if the API returns an error or the data is malformed.
  if (Math.random() < 0.05) { // 5% chance of failure for demonstration
      throw new Error("A simulated Gemini API error occurred.");
  }

  return mockReportData;
};