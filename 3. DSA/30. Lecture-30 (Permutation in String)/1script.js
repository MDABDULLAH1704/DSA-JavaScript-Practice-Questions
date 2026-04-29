// Permutation in String                 
// A permutation means rearrangement of letters.                  


// helper function to compare two frequency arrays          
function isFreqSame(freq1, freq2) {
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }
    return true;
}

// checkInclusion Function      
function checkInclusion(s1, s2) {
    let freq = new Array(26).fill(0);

    // fill frequency for s1 (String)      
    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - 97]++; // 'a' = 97 in ASCII      
    }

    let windSize = s1.length;

    // sliding window over s2 (String, checking substrings)         
    for (let i = 0; i < s2.length; i++) {
        let windFreq = new Array(26).fill(0);
        let windIdx = 0;
        let idx = i;

        while (windIdx < windSize && idx < s2.length) {
            windFreq[s2.charCodeAt(idx) - 97]++;
            windIdx++;
            idx++;
        }

        if (isFreqSame(freq, windFreq)) {
            return true;
        }
    }

    return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo")); 


// charCodeAt(i) - Returns the Unicode (ASCII for English letters) number of the character at position i.
