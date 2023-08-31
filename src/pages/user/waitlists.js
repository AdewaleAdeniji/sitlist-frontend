/* eslint-disable jsx-a11y/img-redundant-alt */
import WaitListFormList from "../../components/dashboard/WaitlistFormList";
import DashboardContainer from "../../layouts/DashboardContainer";

/* eslint-disable jsx-a11y/anchor-is-valid */
const WaitlistsPage = () => {
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
          <h3 className="text-xl font-semibold dark:text-white">
            Waitlists Form
          </h3>
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Create Waitlist
            </button>
          </div>
          <WaitListFormList />
         
        </div>
      </div>
    </DashboardContainer>
  );
};
export default WaitlistsPage;
