import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllDocuments } from "../../../actions/documentAction";
import { DocumentIcon } from "@heroicons/react/20/solid";
import ProgressBar from "../../../component/progressBar/ProgressBar";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const DocumentList = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, documents } = useSelector((state) => state.allDocuments);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleUploadDocument = () => {
    history.push("/dashboard/upload-document");
  };

  useEffect(() => {
    dispatch(getAllDocuments(user.email));
  }, [user.email, dispatch]);

  return (
    <>
      {loading && <ProgressBar />}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* <div className="sm:flex-auto">
    <h1 className="text-base font-semibold leading-6 text-gray-900">
      Users
    </h1>
    <p className="mt-2 text-sm text-gray-700">
      A list of all the users in your account including their name, title,
      email, and role.
    </p>
  </div> */}
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:justify-end flex justify-end">
            <button
              type="button"
              onClick={handleUploadDocument}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Upload Document
            </button>
          </div>
        </div>

        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Client Agreement
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Data Protection
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Risk Profiler
                      </th>
                      {/* <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {documents.map((document) => (
                      <tr key={document.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {document.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                          <a
                            target="_blank"
                            href={document.clientAgreement.url}
                          >
                            <DocumentIcon className="h-6 w-6 " />
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a target="_blank" href={document.dataProtection.url}>
                            <DocumentIcon className="h-6 w-6" />
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a target="_blank" href={document.riskProfiler.url}>
                            <DocumentIcon className="h-6 w-6" />
                          </a>
                        </td>
                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {document.name}</span>
                        </a>
                      </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DocumentList;
