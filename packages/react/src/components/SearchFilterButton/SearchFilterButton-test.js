/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import { Filter16 } from '@rocketsoftware/icons-react';
import { settings } from '@rocketsoftware/carbon-components';

const { prefix } = settings;

describe('[Deprecated] SearchFilterButton', () => {
  let SearchFilterButton;
  let wrapper;

  beforeEach(() => {
    jest.mock('warning', () => {
      return jest.fn();
    });
    SearchFilterButton = require('../SearchFilterButton').default;
    wrapper = mount(<SearchFilterButton labelText="testlabel" />);
  });

  describe('buttons', () => {
    let btn;

    beforeEach(() => {
      btn = wrapper.find('button');
    });

    it('should have type="button"', () => {
      const type = btn.instance().getAttribute('type');
      expect(type).toEqual('button');
    });

    it('has expected class', () => {
      expect(btn.hasClass(`${prefix}--search-button`)).toEqual(true);
    });
  });

  describe('icons', () => {
    it('should use "filter" icon', () => {
      const icon = wrapper.find(Filter16);
      expect(icon.length).toBe(1);
    });
  });
});
