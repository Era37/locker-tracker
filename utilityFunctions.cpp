#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include "assets.cpp"

int stringToInt(std::string string) //  variable to convert input string to integer
{
    try
    {
        int myInteger = std::stoi(string); // users input integer
        return myInteger;
    }
    catch (const std::invalid_argument &e) // stops the program if a invalid characer has been input
    {
        std::cerr << "Invalid argument: " << e.what() << std::endl;
        exit(1);
    }
    catch (const std::out_of_range &e) // stops the program if number input is out of range
    {
        std::cerr << "Out of range: " << e.what() << std::endl;
        exit(1);
    }
}

void Error(std::string message, bool exitProgram) // prints a red error line unless the second argument is true thee it exits the program
{
    PrintColor(RED, message);
    if (exitProgram)
        exit(1);
}

std::vector<std::string> stringSplit(std::string string, char split_char) // creates a vector of strings
{
    std::istringstream iss(string);
    std::string token;
    std::vector<std::string> tokens;
    while (std::getline(iss, token, split_char))
    {
        tokens.push_back(token);
    }
    return tokens;
}
