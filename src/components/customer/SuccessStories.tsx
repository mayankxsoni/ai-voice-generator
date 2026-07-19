import { ICustomer } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import ShowCards from './ShowCards';

const SuccessStories = () => {
  const customersData = getMarkDownData<ICustomer & { [key: string]: unknown }>('src/data/customer/');

  return <ShowCards storiesData={customersData} />;
};

SuccessStories.displayName = 'SuccessStories';
export default SuccessStories;
