import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('returns true when two known anagrams are passed in', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.equal(expected);
    });

    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = isAnagram('elbows', 'below');
        expect(actual).to.equal(expected);

        const actual2 = isAnagram('below', 'elbows');
        expect(actual2).to.equal(expected);
    });

    it('returns false when the strings have the same letter in different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    });

    it('returns true when two known anagrams are passed in and ignores case sensitivity', () => {
        const expected = true;
        const actual = isAnagram('Listen', 'silenT');
        expect(actual).to.equal(expected);
    });
});
