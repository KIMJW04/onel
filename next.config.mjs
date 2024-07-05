import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// 현재 파일의 디렉토리 이름을 가져옵니다.
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.resolve.alias['@'] = resolve(__dirname, 'src');
        return config;
    },
};
