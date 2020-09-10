import { themed } from '../index.js';

describe('ssr', () => {
  test('renders server side', () => {
    const html = htm.bind(h);

    const ow = themed({});

    const style = {
      main: ow`clearfix`,
    }
    
    console.log('renders server side', style)
  })
})