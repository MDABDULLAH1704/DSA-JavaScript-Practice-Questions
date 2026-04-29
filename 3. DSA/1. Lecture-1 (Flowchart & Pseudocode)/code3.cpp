#include <iostream>
using namespace std;

int main()
{
    // Calculate factorial of a number N.
    int n;
    cout << "Enter n : ";
    cin >> n;
    int fact = 1;
    for (int i = 1; i <= n; i++)
    {
        fact = fact * i;
    }
    cout << "Factorial of " << n << " is " << fact;
    return 0;
}