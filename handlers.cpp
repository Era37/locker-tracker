#include <iostream>
#include <vector>
#include "json.hpp"
#include <string>
#include <sstream>
#include <functional>
#include <fstream>
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

using json = nlohmann::json;
using FunctionType = std::function<void(std::string)>;

class Command
{
public:
    std::string name;
    std::string description;
    std::string usage;
    FunctionType ActionCall;

    Command(std::string newName, std::string newDescription, std::string newUsage, FunctionType func)
        : name(newName), description(newDescription), usage(newUsage), ActionCall(func) {}
};

std::vector<Command> command_list;

void help(std::string helpArgs)
{
    for (const Command cmd : command_list)
    {
        std::cout << cmd.name << "\t" << GREEN << cmd.description << std::endl
                  << BLUE << "\tUsage: " << cmd.usage << RESET << std::endl;
    }
}

void info(std::string infoArgs)
{
    std::istringstream iss(infoArgs);
    std::string token;
    std::vector<std::string> tokens;
    while (std::getline(iss, token, ' '))
    {
        tokens.push_back(token);
    }
    if (tokens.size() != 2)
    {
        Error("Incorrect number of arguments", false);
        return;
    }
    int lockerNumber = stringToInt(tokens[1]);
    std::ifstream f("students.json");
    json data = json::parse(f);
    std::cout << data << std::endl;
}

void clear(std::string clearArgs)
{
    std::system(CLEAR);
    std::cout << GREEN << "Console Cleared" << RESET << std::endl;
}

void list(std::string listArgs) {}