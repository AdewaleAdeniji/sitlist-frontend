import WaitlistFormItem from "./WaitlistFormItem";

const WaitListFormList = () => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <WaitlistFormItem 
        title="Test form"
        count={200}
        dateCreated={"10 hours ago"}
        waitlistID={"120202020"}
      />
      <WaitlistFormItem 
        title="Test form"
        count={200}
        dateCreated={"10 hours ago"}
        waitlistID={"120202020"}
      />
    </ul>
  );
};
export default WaitListFormList;
