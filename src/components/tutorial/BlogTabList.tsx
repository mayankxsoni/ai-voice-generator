import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          All
        </Tab>
        <Tab index={1} variant="desktop">
          Finance
        </Tab>
        <Tab index={2} variant="desktop">
          Crypto
        </Tab>
        <Tab index={3} variant="desktop">
          AI Software
        </Tab>
        <Tab index={4} variant="desktop">
          Investment
        </Tab>
        <Tab index={5} variant="desktop">
          Design
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          All
        </Tab>
        <Tab index={1} variant="mobile">
          Finance
        </Tab>
        <Tab index={2} variant="mobile">
          Crypto
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          AI Software
        </Tab>
        <Tab index={4} variant="mobile">
          Investment
        </Tab>
        <Tab index={5} variant="mobile">
          Design
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;
