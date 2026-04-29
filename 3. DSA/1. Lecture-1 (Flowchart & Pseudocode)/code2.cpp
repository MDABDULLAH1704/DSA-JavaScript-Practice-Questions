#include <iostream>
using namespace std;

int main()
{
    // Calculate max of 2 numbers
    int a, b;
    cout << "Enter number a and b : \n";
    cin >> a >> b;
    if (a > b)
    {
        cout << "a is max";
    }
    else
    {
        cout << "b is max";
    }
    return 0;
}