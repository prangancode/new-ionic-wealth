import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import ContentTable from "../DashboardHome/ContentTable";
import ManageDocumentItem from "./ManageDocumentItem";

const ManageDocuments = () => {
  const status = "Please Wait...";
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://financial-app-server-production.up.railway.app/documents")
      .then((res) => {
        setDocuments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* <div className="orders-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-10 sm:gap-x-4 md:gap-y-6">
            {
                documents.map(document => 
                    <ManageDocumentItem key={document._id} document={document}/>
                )
            }
            </div> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <form className="mb-5 w-3/5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Search by id or client name"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              required
            />
          </div>
        </form>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Client ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Document One
              </th>
              <th scope="col" className="px-6 py-3">
                Document Two
              </th>
              <th scope="col" className="px-6 py-3">
                Document Three
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          {loading ? (
            <LoadingStatus status={status} />
          ) : (
            documents
              .filter((val) => {
                if (searchTerm.length === 0) {
                  return val;
                } else if (
                  val._id.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.userName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((document) => (
                <ManageDocumentItem
                  key={document._id}
                  document={document}
                  documents={documents}
                  setDocuments={setDocuments}
                />
              ))
          )}
        </table>
      </div>
    </>
  );
};

export default ManageDocuments;
