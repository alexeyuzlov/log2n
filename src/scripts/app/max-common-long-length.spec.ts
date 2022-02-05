import { maxCommonLongLength } from './max-common-long-length';

describe('Max common long length', () => {
    it('should find correctly', () => {
        expect(maxCommonLongLength('hish', 'fish')).toBe('ish');
    });

    it('should be empty for no interception', () => {
        expect(maxCommonLongLength('abc', 'xyz')).toBe('');
    });
});
