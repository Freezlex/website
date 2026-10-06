const path = require('path');

const aliases = {
    '@assets': 'src/assets/',
    '@components': 'src/components/',
    '@config': 'src/config/',
    '@features': 'src/features/',
    '@hooks': 'src/hooks/',
    '@utils': 'src/utils/',
    '@views': 'src/views/',
    '@svg': 'src/assets/images/svg/',
    '@icons': 'src/assets/images/svg/icons',
};

module.exports = {
    webpack: {
        alias: Object.fromEntries(
            Object.entries(aliases).map(([alias, dir]) => [alias, path.resolve(__dirname, dir)])
        ),
    },
    jest: {
        configure: {
            moduleNameMapper: Object.fromEntries(
                Object.entries(aliases).map(([alias, dir]) => [
                    `^${alias}/(.*)$`,
                    `<rootDir>/${dir.replace(/\/$/, '')}/$1`,
                ])
            ),
        },
    },
};
