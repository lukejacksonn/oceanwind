import { getStyleTag, VirtualInjector } from 'otion/server';
import { setup, themed } from '../index.js';

const injector = VirtualInjector();
setup({ injector });

const ow = themed({});
ow`clearfix`;

console.log('Generated a style tag', getStyleTag(injector));
