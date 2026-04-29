#include <iostream>
#include <vector>
using namespace std;

// int main()
// {
//     // Null Pointer
//     int *ptr = NULL;
//     cout << ptr << endl;
//     return 0;
// }

// void changeA(int *ptr)
// {
//     *ptr = 20;
// }

// int main()
// {
//     // Pass by Reference using Pointer
//     int a = 10;
//     changeA(&a);
//     cout << "Inside main fnx : " << a << endl;
//     return 0;
// }

void changeA(int &b)
{
    b = 20;
}

int main()
{
    // Pass by Reference using Alias
    int a = 10;
    changeA(a);
    cout << "Inside main fnx : " << a << endl;
    return 0;
}