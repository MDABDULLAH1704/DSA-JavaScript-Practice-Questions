#include <iostream>
#include <vector>
using namespace std;

// int main()
// {
//     // De-reference Operator
//     int a = 10;
//     int *ptr = &a;
//     cout << *(ptr) << endl;
//     return 0;
// }

int main()
{
    // De-reference Operator
    int a = 10;
    int *ptr = &a;
    int **ptr2 = &ptr;
    cout << *(ptr) << endl;
    cout << **(ptr2) << endl;
    return 0;
}