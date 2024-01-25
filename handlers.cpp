#include <iostream>
#include <vector>
#include "json.hpp"
#include <string>
#include <sstream>
#include <functional>
#include <fstream>
#include <regex>
#include "assets.cpp"
#define OPTIONAL_PREFIX "--"
#ifdef __linux__
#define CLEAR "clear"
#elif _WIN32
#define CLEAR "cls"
#elif __APPLE__
#define CLEAR "clear"
#else
#define CLEAR "clear"
#endif

using json = nlohmann::json;                           // Bringing blohamnn/joson to top scope for ease of reference
using FunctionType = std::function<void(std::string)>; // Defining the type of function that each command must abide by

class Command // Defining a command class that will store the attributes of each command when defined for ease of interaction and to ensure a basic template is followed
{
public:
    std::string name;        // The name of the command
    std::string description; // The description of what the command does
    std::string usage;       // How the command should be used i.e what arguments are required/optional
    FunctionType ActionCall; // The function that is called if the command is entered

    Command(std::string newName, std::string newDescription, std::string newUsage, FunctionType func)
        : name(newName), description(newDescription), usage(newUsage), ActionCall(func) {} // Describes the class constructor, nothing fancy, this is boilerplate
};

std::vector<Command> command_list; // Defines the command list that will store the vector of commands. This has been defined here to prevent type errors with the help command

void help(std::string helpArgs) // The help command handler is defined, follows the schema outlined by the class and iterates through the commands in the command_list
{
    for (const Command cmd : command_list) // Iterates through each command in the vector of commmands
    {
        std::cout << cmd.name << "\t" << GREEN << cmd.description << std::endl // Formats and outputs all of the attributes of the command to display the required data to the user by giving the command name then a tab then changes the colour to green then pipes the description into the output stream followed by a newline where the colour is changed to blue then a tab is inserted followed by "Usage: " then the command usage and lastly the colour is reset to the default grey
                  << BLUE << "\tUsage: " << cmd.usage << RESET << std::endl;
    }
}

void printOwner(json owner_json) // Outputs the owner of the locker, this is a helper function, NOT A HANDLER!!!
{
    PrintColor(BLUE, "Owner:"); // Outputs the words "Owner: " (without quotes) in blue
    if (owner_json.is_null())
    {
        PrintColor(RED, std::string(SOFTTAB) + "This Locker has no Owner"); // If the locker selected has no owner assigned to it, the code Displays "Owner: " in blue text followed by "This locker has no owner" which is 3 spaces away and in red text 3
        return;
    }
    std::string student_name(owner_json["name"].get<std::string>());                  // Retrieves the students name from the json passed into the function
    int student_grade(owner_json["grade"].get<int>());                                // Gets the students grade from the json
    std::cout << SOFTTAB << BLUE << "Name: " << RESET << student_name << std::endl    // leaves 3 spaces before "Name:", reseting the text colour to blue and then displays the Name assigned
              << SOFTTAB << BLUE << "Grade: " << RESET << student_grade << std::endl; // leaves 3 spaces before "Grade" and restest the text back to blue, displays the assigned grade followed by a % sign
}

void info(std::string infoArgs) // Provides info on a locker number
{
    std::vector<std::string> tokens = stringSplit(infoArgs, ' '); // Splits input by space in order to isolate the entered locker number
    if (tokens.size() != 2)                                       // If the split returns more than two tokens error
    {
        Error("Incorrect number of arguments", false); // Return incorrect number of args error
        return;                                        // Return and void function
    }
    int lockerNumber = stringToInt(tokens[1]);               // Parse the second token into the locker number
    json locker_value;                                       // Define an empty json of name locker_value
    json data = json::parse(std::ifstream("students.json")); // Parses the data from students.json into a json object
    for (auto &el : data)                                    // For every entry in the students json
    {
        if (el["lockerNumber"].get<int>() == lockerNumber) // Checks if the locker number of the item being iterated over is equal to the locker number passed in
        {
            locker_value = el; // If it is set the locker value variable equal to the item being iterated on
            break;             // Break from the for loop since the locker has been found
        }
    }
    std::cout << BLUE << "Number #: " << YELLOW << locker_value["lockerNumber"].get<int>() << std::endl   // Outputs the locker number of the locker with the "Number #:" part in blue and the number in yellow
              << BLUE << "Hallway: " << RESET << locker_value["Hallway"].get<std::string>() << std::endl; // Outputs the Hallway text in blue then the hallway in which the locker resides in default grey
    printOwner(locker_value["Owner"]);                                                                    // Calls the printOwner function which will print the owner or the respective error
}

void clear(std::string clearArgs)
{
    std::system(CLEAR);                                            // Executes the clear command which was defined based on which machine compiled the code NOT BASED ON THE MACHINE WHICH THE CODE IS BEING RUN!
    std::cout << GREEN << "Console Cleared" << RESET << std::endl; // Output success message of "Console Cleared" then reset colour back to default
}

void list(std::string listArgs) // Defines the list function that will list commands with the respective filter
{
    std::regex range_regex(R"(--range(\s|=)[0-9]+-[0-9]+)");      // Defines regex that outlines how the range of lockers should be inputted
    std::regex floor_regex(R"(--floor(\s|=)[0-9])");              // Defines regex that outlines how the floor of lockers should be inputted
    std::regex hallway_regex(R"(--hallway(\s|=)\w+)");            // Defines regex that outlines how the hallway of lockers should be inputted
    json data = json::parse(std::ifstream("students.json"));      // Parses the students.json into a data json
    json data_copy = json::parse(std::ifstream("students.json")); // Parses students.json into a copy of the data variable
    std::smatch match{};                                          // Defines the match variable that will store the regex match
    if (std::regex_search(listArgs, match, range_regex))          // Checks if the listArgs matches the range regex
    {
        std::string matched_string = match.str().substr(8, 10);             // Substrings the match to solely extract the number range inputted
        std::vector<std::string> tokens = stringSplit(matched_string, '-'); // Splits on the - so they can be each assigned their own variable later
        if (tokens.size() != 2)                                             // Checks if the token array is not equal to two which would result in an error
        {
            Error("Incorrect number of arguments", false); // Returns an error
            return;                                        // Exists program
        }
        int offset = 0;                           // Defines the offset that will later be releavent
        int bottomRange = stringToInt(tokens[0]); // Parses the first token into the bottom range
        int topRange = stringToInt(tokens[1]);    // Parses the second token into the top range
        if (bottomRange >= topRange)              // If the bottom range is greater than or equal to the top range error
        {
            Error("Top range must be greater than bottom range", false); // Print error
            return;                                                      // Return from request
        }
        for (auto &el : data) // Iterate through the entries in data
        {
            int locker_number = el["lockerNumber"].get<int>();           // Get the locker number from the entry
            if (locker_number > topRange || locker_number < bottomRange) // If the locker number is more than the top range and less than the bottom range delete it from the data copy
            {
                data_copy.erase(offset); // Erase from the data copy with index offset
            }
            else
                offset++; // Otherwise increase the offset, this is because we want to ensure we're overshooting the data we want to keep and not deleting solely the head of the vector (its not a vector but it basically is so just use ur imagination) so each time we hit a data that hits our criteria we want to increase the offset to ensure on the following iterations we will be deleting the data AFTER it and not deleting the wanted data.
        }
    }
    if (std::regex_search(listArgs, match, floor_regex)) // Checks if the inputted listArgs meets the floor_regex criteria
    {
        json local_revision_copy = json::parse(data_copy.dump()); // creates a local copy of the data_copy to edit because we want to make sure we iterating through a clone of our editable data when we're editing it and `data` is NOT (or may not be) a clone of `data_clone` since it may have been edited above so for safety we need to make a copy here
        int floor = stringToInt(match.str().substr(8, 11));       // Grabs the substring from 8 to 11 and converts it to an int so we have an int representing the floor
        int offset = 0;                                           // Define the offset like we did above
        for (auto &el : local_revision_copy)                      // Iterate through the clone we made
        {
            if (el["Floor"].get<int>() != floor) // Check if the floor of the object we're on is not equal to the floor the user entered
            {
                data_copy.erase(offset); // If it's not equal we just erase it on the data_copy
            }
            else
                offset++; // Increase our offset like we did above
        }
    }
    if (std::regex_search(listArgs, match, hallway_regex)) // Checks if the listArgs matches the hallway_regex
    {
        json local_revision_copy = json::parse(data_copy.dump()); // Creates the copy of the data_copy again
        std::string hallway_string(match.str().substr(10, 25));   // Defines substring but no convert to int, just takes it as a string
        int offset = 0;                                           // Defines offset
        for (auto &el : local_revision_copy)                      // Iterates through our local copy
        {
            if (el["Hallway"].get<std::string>() != hallway_string) // If the hallway is not equal to the hallway entered
            {
                data_copy.erase(offset); // Delete it from the data_copy
            }
            else
                offset++; // Increase offset blah blah blah
        }
    }
    if (!data_copy.size()) // If the data size is equal to zero
    {
        Error("No lockers meet this criteria", false); // Throw this error
        return;                                        // And return
    }
    for (auto &el : data_copy) // Iterate through the data copy we created
    {
        std::cout << YELLOW << el["lockerNumber"].get<int>() << GREEN << " - " << BLUE << el["Hallway"].get<std::string>() << RESET << std::endl; // Outputs locker number in yellow then green dash and the hallway that the locker is in followed by a endline statement
    }
}

void exitHandler(std::string exitArgs)
{
    Error("Bye!", true); // Prints "Bye!" in red and closes program
}
