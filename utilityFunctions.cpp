#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include "assets.cpp"

int stringToInt(std::string string) // Variable to convert input string to integer
{
    try
    {
        int myInteger = std::stoi(string); // Casts string to an int
        return myInteger;                  // Returns the int
    }
    catch (const std::invalid_argument &e) // Catched an error
    {
        std::cerr << "Invalid argument: " << e.what() << std::endl; // Outputs the error
        exit(1);                                                    // Exists program
    }
    catch (const std::out_of_range &e) // Catches an error
    {
        std::cerr << "Out of range: " << e.what() << std::endl; // Outputs the error
        exit(1);                                                // Exists the program
    }
}

void Error(std::string message, bool exitProgram) // Prints a red error line unless the second argument is true thee it exits the program
{
    PrintColor(RED, message); // Print the message in red
    if (exitProgram)          // If the exit program is true
        exit(1);              // Exit the program
}

std::vector<std::string> stringSplit(std::string string, char split_char) // creates a vector of strings
{
    std::istringstream iss(string);              // Create a stringstream of the entered string
    std::string token;                           // Defines the token as a storage media (passed by reference)
    std::vector<std::string> tokens;             // This will be returned and is all of the tokens held by string split by split_char
    while (std::getline(iss, token, split_char)) // While this function returns true that pipes in iss, stores in token seperated by split_char
    {
        tokens.push_back(token); // Pushes the token into the token vec
    }
    return tokens; // Returns tokens
}
