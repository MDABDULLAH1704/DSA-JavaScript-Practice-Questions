#include <iostream>
using namespace std;

int main()
{
    // Calculate simple interest
    int p, r, t;
    cout << "Enter number p, r and t \n";
    cin >> p >> r >> t;
    int SimpleInterest = (p * r * t);
    cout << "Simple Interest is " << SimpleInterest;
    return 0;
}