#include <iostream>
#include <vector>
using namespace std;

// int main()
// {
//     int a = 10;
//     cout << &a << endl;
//     return 0;
// }

int main()
{
    int a = 10;
    int *ptr = &a;
    cout << ptr << endl;
    cout << &a << endl;
    return 0;
}

// int main()
// {
//     int a = 10;
//     int *ptr = &a;
//     int **ptr2 = &ptr;
//     cout << &a << endl;
//     cout << ptr << endl;
//     cout << &ptr << endl;
//     cout << ptr2 << endl;
//     return 0;
// }