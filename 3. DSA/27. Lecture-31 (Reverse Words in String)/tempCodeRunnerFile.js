
    while (i < n) {
        let word = '';
        while (i < n && s[i] === ' ') i++;
        while (i < n && s[i] !== ' ') word += s[i++];
        let reversedWord = word.split('').reverse().join('');
        if (reversedWord.length > 0) ans += ' ' + reversedWord;
    }
    return ans.trim();