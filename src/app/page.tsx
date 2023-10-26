"use client"
import React, { useState } from 'react';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface TableDataItem {
  sno: number;
  task: string;
  status: string;
}

const Home: React.FC = () => {
  const { push } = useRouter();
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sample table data
  const tableData: TableDataItem[] = [

    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done'},
    { sno: 3, task: 'Clean room', status: 'In progress'},
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done'},
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done'},
    { sno: 3, task: 'Clean room', status: 'In progress'},
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started'},
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
    { sno: 1, task: 'Go to bed early', status: 'Not started' },
    { sno: 2, task: 'Eat breakfast on time', status: 'Done' },
    { sno: 3, task: 'Clean room', status: 'In progress' },
  ];

  const totalPages: number = Math.ceil(tableData.length / itemsPerPage);

  // Function to get the current page of data
  const getCurrentPageData = (): TableDataItem[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return tableData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  const handleEdit = (sno: number) => {
    // Implement your edit logic here
    push(`edit/${sno}`)
    console.log(`Edit button clicked for item ${sno}`);

  };

  const handleDelete = (sno: number) => {
    // Implement your delete logic here
    console.log(`Delete button clicked for item ${sno}`);
  };
  console.log('getCurrentPageData.length-->'+getCurrentPageData().length)
  return (
    <main className="mt-10">
    <div className="overflow-x-auto">
    {getCurrentPageData().length === 0 ? (
<div className="flex justify-center items-center">
  <div className="card w-96 bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
      <h2 className="card-title">No Tasks created yet</h2>
      <p>Start adding tasks to your todo list</p>
      <div className="card-actions justify-end">
      <Link className='btn btn-primary' href='/create'>Add New Task</Link>
      </div>
    </div>
  </div>
</div>
) : (
<table className="table">
          {/* Table content */}
          <thead>
            <tr>
              <th className='text-xl text-indigo-950'>S.no</th>
              <th className='text-xl text-indigo-950'>Task</th>
              <th className='text-xl text-indigo-950'>Status</th>
              <th className='text-xl text-indigo-950'>Action</th>
            </tr>
          </thead>
          <tbody>

              {getCurrentPageData().map((item: TableDataItem, index: number) => (
              <tr key={index} className="hover">
                <th>{item.sno}</th>
                <td>{item.task}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => handleEdit(item.sno)}
                    className="btn btn-circle hover:bg-white border-white  bg-purple-200"
                  >
              
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        className="h-6 w-6"  viewBox="0 0 64 64">
                    <linearGradient id="0O0q6J4HBgQKyT39nvTa~a_56304_gr1" x1="46.807" x2="46.807" y1="9.849" y2="24.215" gradientUnits="userSpaceOnUse"
                    spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop>
                    </linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~a_56304_gr1)" 
                    d="M49.482,24.392l-9.874-9.874l4.232-4.232c0.39-0.39,1.021-0.39,1.411,0l8.464,8.464 c0.39,0.39,0.39,1.021,0,1.411L49.482,24.392z">
                      </path><linearGradient id="0O0q6J4HBgQKyT39nvTa~b_56304_gr2" x1="32" x2="32" y1="8.084" y2="55.83"
                      gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~b_56304_gr2)" 
                    d="M50.697,25.999l4.428-4.428c1.167-1.167,1.167-3.065,0-4.232l-8.464-8.464 c-1.167-1.167-3.065-1.167-4.232,0l-4.428,4.428c-0.664-0.175-1.4-0.011-1.92,0.509l-1.411,1.411c-0.52,0.52-0.684,1.256-0.509,1.92 L11.198,40.106l-0.508,0.508l-0.2,0.2l-2.373,9.967c-0.343,1.442,0.078,2.928,1.126,3.976s2.534,1.469,3.976,1.125l9.967-2.373 l0.2-0.2l0.508-0.508l22.964-22.964c0.664,0.175,1.4,0.011,1.92-0.509l1.411-1.411C50.708,27.399,50.872,26.663,50.697,25.999z M47.367,27.92L36.081,16.634l1.411-1.411l11.285,11.285L47.367,27.92z M23.46,50.414c-0.28-1.063-0.682-2.077-1.198-3.034 l20.872-20.872l2.116,2.116L23.46,50.414z M14.916,53.428c-0.12-1.074-0.58-2.115-1.405-2.939c-0.825-0.825-1.865-1.285-2.939-1.405 l0.698-2.931c1.649,0.266,3.173,1.036,4.357,2.22c1.184,1.184,1.954,2.709,2.22,4.357L14.916,53.428z M17.038,46.962 c-1.447-1.447-3.301-2.396-5.306-2.75l0.463-1.943c2.382,0.441,4.533,1.562,6.254,3.282s2.841,3.872,3.282,6.254l-1.943,0.463 C19.433,50.263,18.485,48.409,17.038,46.962z M19.859,44.141c-0.477-0.477-0.987-0.907-1.517-1.304l20.561-20.561l2.821,2.821 L21.163,45.658C20.766,45.128,20.336,44.618,19.859,44.141z M16.62,41.738c-0.957-0.516-1.971-0.918-3.034-1.198l21.79-21.79 l2.116,2.116L16.62,41.738z M43.84,10.286c0.389-0.389,1.022-0.389,1.411,0l8.464,8.464c0.389,0.389,0.389,1.022,0,1.411 l-4.232,4.232l-9.874-9.874L43.84,10.286z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(item.sno)}
                    className="btn btn-circle hover:bg-white bg-indigo-950"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 48 48">
<path fill="#b39ddb" d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"></path><path fill="#9575cd" d="M28 6L20 6 14 12 34 12z"></path><path fill="#7e57c2" d="M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z"></path>
</svg>
                  </button>
                </td>
              </tr>
            )
            )
          }
          </tbody>
        </table>
)}



    </div>

    {/* Render the Pagination component */}
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  </main>
  );
};

export default Home;
