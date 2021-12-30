import { registerMicroApps, start } from 'qiankun';

export default function qiankun() {
    registerMicroApps([
        {
            name: 'micoApp', // app name registered
            entry: '//localhost:8080',
            container: '#qiankun-container',
            activeRule: '/mico-demo',
        },
    ]);

    start();
}
