// "listen" - "silent"
// "elbow" - "below"
import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';


export const formatString = string =>
    string.toLowerCase().replace(/\s+/g, '');

export const isAnagram = (string1, string2) => {
    let result = string1 == string2;
    
    if (!result && (string1.lenght == string2.lenght))
    {
        const string1LetterCount = getLetterCount(formatString(string1));
        const string2LetterCount = getLetterCount(formatString(string2));

        result = isEqual(string1LetterCount, string2LetterCount);
    }
    
    return result;
};