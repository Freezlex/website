import { Path, paths } from './paths';

describe('Path', () => {
    it('returns its href', () => {
        expect(paths.home.getHref()).toBe('/');
        expect(new Path('/blog').getHref()).toBe('/blog');
    });

    it('builds section anchors', () => {
        expect(paths.home.getAnchor('about')).toBe('/#about');
        expect(new Path('/blog').getAnchor('latest')).toBe('/blog#latest');
    });
});
