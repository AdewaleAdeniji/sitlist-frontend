import { formatRelativeTime } from "../../helpers/date";
import WaitlistFormItem from "./WaitlistFormItem";

const WaitListFormList = ({ isData, list }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {list.map((item, index) => {
        return (
          <WaitlistFormItem
            title={isData ? item?.dumpID : item?.waitlistTitle}
            count={item?.filled}
            dateCreated={formatRelativeTime(item?.createdAt)}
            waitlistID={item?.waitlistID}
            isData={isData}
            dataJSON={item?.waitlistData}
            key={index}
          />
        );
      })}
    </ul>
  );
};
export default WaitListFormList;
