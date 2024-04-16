import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import "./ContentTable.css";

const ContentTable = () => {
  const status = "Fetching Information...";
  const [tableDocuments, setTableDocuments] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContexts();

  useEffect(() => {
    setLoading(true);
    const email = user.email;
    const url = `https://financial-app-server-production.up.railway.app/documents/${email}`;
    axios
      .get(url)
      .then((res) => {
        setTableDocuments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user.email]);

  return (
    <>
      {loading ? (
        <LoadingStatus status={status} />
      ) : !tableDocuments?.investmentPension && !tableDocuments?.insurance ? (
        <div className="text-center text-gray-400 mt-5 font-semibold">
          Admin has not uploaded any documents yet
        </div>
      ) : (
        <div className="">
          <section className="user-details section-gap-userdata">
            <div className="container">
              <div className="row-userdata">
                {/* Details Content */}
                <div className="col-lg-6-userdata">
                  <div class="p-4 max-w-md bg-white rounded-lg border border-blue-500 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
                    <div class="flex justify-between items-center mb-4">
                      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white underline underline-offset-2">
                        INVESMENT & PENSIONS
                      </h5>
                    </div>
                    <div class="flow-root">
                      <ul
                        role="list"
                        class="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                OWNER
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.ownerName}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                INVESTED AMOUNT
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {
                                tableDocuments?.investmentPension
                                  ?.investedAmount
                              }
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                DESCRIPTION
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.description}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                CURRENT VALUE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.currentValue}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                PROVIDER
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.provider}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                IN TRUST
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.inTrust}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                PLAN NO
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.planNo}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-blue-500 truncate dark:text-white">
                                START DATE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.startDate}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6-userdata">
                  <div class="p-4 max-w-md bg-white rounded-lg border border-green-500 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
                    <div class=" mb-4">
                      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white underline underline-offset-2">
                        INSURANCE
                      </h5>
                    </div>
                    <div class="flow-root">
                      <ul
                        role="list"
                        class="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                LIFE ASSURED/ POLICY BENEFICIARY
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.lifeAssured}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                SUM ASSURED/ BENEFITS
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.sumAssured}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                PURPOSE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.purpose}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                POLICY TYPE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.policyType}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                PREMIUM/FREQUENCY
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.premiumFrequency}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                INSURANCE COMPANY
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.insuranceCompany}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                START DATE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.startDate}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                POLICY NO
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.policyNo}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-green-500 truncate dark:text-white">
                                MATURITY DATE
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.maturityDate}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ContentTable;
