#include <iostream>
#include <string>
#include "assets.cpp"

void PrintColor(std::string color, std::string text) // Takes in the colour and string that should be formatted
{
    std::cout << color << text << RESET << std::endl; // Pipe colour than text than RESET macro into output stream
}