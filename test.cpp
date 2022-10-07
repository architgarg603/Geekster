#include <iostream>
#include <math.h>
using namespace std;


bool isNaturalSum(int B){
	float x=(-1+sqrt(1+8*B))/2;

	//check for valid integer value of x
	if(ceil(x)==floor(x))
		return true;
	else
		return false;
}

int maximumIndex(int N, int B){

	//Maximum Reachable value with N steps
	long long int max_sum = ((N)*(N+1))/2;

	//Determine if B lies in the sum of x natural numbers.
	bool is_B_reachable = isNaturalSum(B);

	//If B is reachable, don't include the first step else return the max_sum
	if(is_B_reachable){
		return max_sum - 1;
	}
	else{
		return max_sum;
	}
}

int main()
{
	// Given value of N & B
	int N = 2, B = 2;

	// Function call to find maximum
	// index the pointer can reach
	cout<<maximumIndex(N, B)<<endl;

	return 0;
}
