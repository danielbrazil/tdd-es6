import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('return true when passed empties strings', () => {
        const expected = true;
        const actual = isAnagram('', '');
        expect(actual).to.deep.equal(expected);
    });

    it('return false when passed different strings', () => {
        const expected = false;
        const actual = isAnagram('test', 'best');
        expect(actual).to.deep.equal(expected);
    });

    it('return true when passed anagram strings', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.deep.equal(expected);
    });

    it('return true when passed anagram strings when the string is a sentence', () => {
        const expected = true;
        const actual = isAnagram('conversation', 'voices rant on');
        expect(actual).to.deep.equal(expected);
    });

    it('return true when passed anagram strings when one string is uppercase and another in lowercase', () => {
        const expected = true;
        const actual = isAnagram('STATE', 'taste');
        expect(actual).to.deep.equal(expected);
    });
});