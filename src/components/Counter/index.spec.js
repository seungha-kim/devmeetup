import test from 'tape'
import Counter from '.'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import React from 'react'

test('Counter can be rendered', (t) => {
  t.plan(1)
  const clickSpy = sinon.spy()
  const rendered = shallow(<Counter onClick={clickSpy} count={0} />)
  rendered.find('button').simulate('click')
  t.ok(clickSpy.calledOnce)
})
