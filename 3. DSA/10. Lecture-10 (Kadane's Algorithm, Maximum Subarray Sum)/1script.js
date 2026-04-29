// Maximum SubArray         
// Time Complexity - O(n cube)        
function subArray(arr) {
    for (let st = 0; st < arr.length; st++) {
        for (let end = st; end < arr.length; end++) {
            let line = '';
            for (let i = st; i <= end; i++) {
                line = line + arr[i] + ' ';
            }
            console.log(line);
        }
        console.log('');
    }
}
subArray([1, 2, 3, 4, 5]);
