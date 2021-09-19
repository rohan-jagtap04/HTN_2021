#include <iostream>
#include <fstream>
#include <cmath>
#include <cstdlib>

using namespace std;

int main(){
    ofstream fileOut("documentType.txt");
    string documentClass = "Not Tax Related";
    ifstream fileIn("extractedText1.txt");

    if (!fileIn){
        cout << "File not opened";
        return EXIT_FAILURE;
    }

    if(fileIn.is_open()){
      
        string textArray[1000];

        for(int i = 0; i < 1000; i++){
          
            if (textArray[i] != "0"){
              
                fileIn >> textArray[i];
                
                    if (textArray[i] == "PIZZA" || textArray[i] == "food" || textArray[i] == "Hotel"){
                      documentClass = "Business Expense, $10.05";
                    }
                    if (textArray[i] == "Accounting Fees" || textArray[i] == "Accountant" || textArray[i] == "Legal Fees"){
                      documentClass = "Accounting and Legal Fees";
                    }
                    if (textArray[i] == "Electricity" || textArray[i] == "Hydro" || textArray[i] == "Home Internet" || textArray[i] == "Maintenance"){
                      documentClass = "Work From Home Expenses";
                    }
                    if (textArray[i] == "Entertainment" || textArray[i] == "Movies" || textArray[i] == "Netflix"){
                      documentClass = "Entertainment";
                    }
                    if (textArray[i] == "1"){
                      documentClass = "Not Tax Related";
                    }
            }
        }
    }

    fileOut << documentClass;
    fileIn.close();
    fileOut.close();
    return EXIT_SUCCESS;
}
