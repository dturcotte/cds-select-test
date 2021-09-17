
import { render, screen } from '@testing-library/react';
import { ExampleCdsSelect } from './ExampleCdsSelect';


describe('CdsSelect', () => {
  /*
   * Result:
   *
   * TypeError: 'set' on proxy: trap returned falsish for property 'disabled'
   *
   *  at forEach (node_modules/src/internal/utils/lit.ts:29:24)
   *      at Array.forEach (<anonymous>)
   *  at syncProps (node_modules/src/internal/utils/lit.ts:29:10)
   *  at HTMLElement.updated (node_modules/src/forms/control/control.element.ts:205:9)
   *  at HTMLElement._$didUpdate [as _$AE] (node_modules/@lit/reactive-element/src/reactive-element.ts:1156:10)
   *  at HTMLElement.performUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1139:12)
   *  at HTMLElement.scheduleUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1058:17)
   *  at HTMLElement._$EC (node_modules/@lit/reactive-element/src/reactive-element.ts:1030:25)
   */
  test('can be used in a component that is tested', async () => {
    render(<ExampleCdsSelect />);

    // this is what we would like to do
    // expect(await screen.findByLabelText('Test select')).toBeInTheDocument();

    // but anything async displays the problem
    expect(
      await screen.findByText('This renders a select'),
    ).toBeInTheDocument();
  });
});
