import { getStyleTag, VirtualInjector } from 'otion/server';
import { setup, themed } from '../index.js';

const injector = VirtualInjector();
setup({ injector });

const ow = themed({});
ow`clearfix`;

getStyleTag(injector).match('clear:both')
  ? console.log('✅ Working with SSR')
  : console.error('❌ Not Working with SSR');
