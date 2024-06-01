import { useState } from "react";
import ContentCA from "./ContentCA";
import ContentDP from "./ContentDP";
import ContentQA from "./ContentQA";

const clientAgreement = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "Client Agreement Document",
    body: `
      <p>Riverpark Investment and Financial Consultants Ltd is permitted to advise on and arrange
      (bring about) deals in investments.</p>
      <p>With regard to investments which we have arranged for you, these will not be kept under review,but we will advise you upon your request. However, we may contact you in the future by means of an unsolicited promotion (i.e. where you had not expressly requested it) should we wish to contact you to discuss the relative merits of an investment or service which we feel may be of interest to you.</p>
      <p>Riverpark Investment and Financial Consultants Ltd does not handle clients’ money. We
      never accept a cheque made payable to us or handle cash (unless it is payment in settlement of adviser charges or disbursements for which we have sent you an invoice). If you do send us
      money, this may delay your transaction as we may have to return this money to you.</p>
    `,
  },
  // More questions...
];

const dataProtection = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "GDPR Data Protection",
    body: `
    <span className='text-lg font-semibold text-gray-600'>DATA PRIVACY NOTICE</span>
      <p>We take your privacy very seriously and we ask that you read
      this privacy no3ce carefully as it contains important informa3on
      on who we are, how and why we collect, store, use and share
      personal data, your rights in rela3on to your personal data and
      on how to contact us and supervisory authori3es in the event
      you have a complaint.</p>
      <p>Italicised words in this privacy no3ce have the meaning set out
      in the Glossary of Terms at the end of this document.</p>
      <br />
      <span className='text-lg font-semibold text-gray-600 uppercase'>WHO WE ARE</span>
      <br /><br />
      <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> collects, uses and is responsible for certain personal data about you. When
                      we do so we are required to comply with data protec1on
                      regula1on and we are responsible as a data controller of that
                      personal data for the purposes of those laws.
                      When we men3on "Riverpark” we are referring to Riverpark
                      Investment & Financial Consultants Ltd.

                    <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> is a company registered in Scotland (SC220303) whose registered oﬃce is at
                    145 St Vincent Street, Glasgow, G2 5JH. Riverpark Investment &
                    Financial Consultants Ltd is authorised and regulated by the
                    Financial Conduct Authority. Riverpark’s Financial Services
                    Register number is 455480.
     
    `,
  },
  // More questions...
];

const riskProfiler = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "Dynamic Planner Risk Profiler",
    body: `
   
      <p>In order for your adviser to provide you with financial advice, they need to understand your experience of investing in financial products and approach to risk. To do this they have adopted Dynamic Planner’s risk profiling process comprising 3 short sets of questions, which normally takes less than 10 minutes to complete.</p>
      <br />
      <ul className='list-disc leading-8 text-blue-400 italic'>
      <li>Firstly, you will be asked about your experience of investing in different financial products.</li>
      <li>Next, your attitude to investment risk will be explo</li>
      <li>Finally, you will be asked a few questions to help your adviser understand your capacity for taking investment risk given your current financial position.</li>
      </ul><br />
      <p>Once you have answered all these questions, return this document to your adviser who will work out your risk profile and use this to inform the financial advice they provide.</p>
     
    `,
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewDashboardHome = () => {
  const tabs = [
    {
      name: "Client Agreement",
      href: "#",
      current: true,
      action: "CLIENT_AGREEMENT",
    },
    {
      name: "Data Protection",
      href: "#",
      current: false,
      action: "DATA_PROTECTION",
    },
    {
      name: "Risk Profiler",
      href: "#",
      current: false,
      action: "RISK_PROFILER",
    },
    {
      name: "Investment Details",
      href: "#",
      current: false,
      action: "INVESTMENT_DETAILS",
    },
    // { name: "Most Answers", href: "#", current: false },
  ];
  const [intialTabs, setTabs] = useState(tabs);
  const [tabActionName, setTabActionName] = useState("CLIENT_AGREEMENT");

  const handleTabClick = (clickedTabAction) => {
    setTabActionName(clickedTabAction);
    setTabs(
      intialTabs.map((tab) => ({
        ...tab,
        current: tab.action === clickedTabAction,
      }))
    );
  };

  return (
    <>
      <div className="px-4 sm:px-0">
        <div className="sm:hidden">
          <label htmlFor="question-tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="question-tabs"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex border-r divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {intialTabs.map((tab, tabIdx) => (
              <button
                onClick={() => handleTabClick(tab.action)}
                key={tab.name}
                // href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                )}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-rose-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-4">
        {tabActionName === "CLIENT_AGREEMENT" && (
          <ContentCA clientAgreement={clientAgreement} />
        )}
        {tabActionName === "DATA_PROTECTION" && (
          <ContentDP dataProtection={dataProtection} />
        )}
        {tabActionName === "RISK_PROFILER" && (
          <ContentQA riskProfiler={riskProfiler} />
        )}
      </div>
    </>
  );
};

export default NewDashboardHome;
