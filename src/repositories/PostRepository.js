/* eslint-disable import/no-anonymous-default-export */
import ModyoSdk from './clients/ModyoClient';

import { space, type } from './clients/config/modyo.config';

const content = ModyoSdk.getContentType(space, type);
const privateContent = ModyoSdk.getContentType(space, type, false);

export default {
  get() {
    return content.getEntries();
  },
  getTop(number) {
    const filter = content.Filter().Pagination(1, number);
    return content.getEntries(filter);
  },
  getPrivate() {
    return privateContent.getEntries();
  },
  getPrivateTop(number) {
    const filter = content.Filter().Pagination(1, number);
    return privateContent.getEntries(filter);
  },
  getEntry(id) {
    return privateContent.getEntry(id);
  },
};