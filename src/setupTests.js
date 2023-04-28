/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'
import {configure as eConfigure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({testIdAttribute: 'testid'})
eConfigure({adapter: new Adapter()})

/* below code is used to resolve - matchMedia not present, legacy browsers require a polyfill */

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }
