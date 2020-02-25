import { Genesis } from '@fmfe/genesis-core';

export const ssrContent = new Genesis({
    name: 'ssr-content',
    server: {
        port: 3001,
        renderMode: 'ssr-json'
    }
});
