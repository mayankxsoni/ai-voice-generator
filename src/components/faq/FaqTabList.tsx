import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          General
        </Tab>
        <Tab index={1} variant="desktop">
          Changelog
        </Tab>
        <Tab index={2} variant="desktop">
          Privacy
        </Tab>
        <Tab index={3} variant="desktop">
          Terms & Conditions
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          General
        </Tab>
        <Tab index={1} variant="mobile">
          Changelog
        </Tab>
        <Tab index={2} variant="mobile">
          Privacy
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Terms & Conditions
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
