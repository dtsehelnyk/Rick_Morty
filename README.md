# Rick and Morty (React.js)

This task is a react web application that displays all the information about the Rick and Morty Tv series. It has 4 tabs in the navigation panel: Characters, Episodes, Locations, My watch list.

## [Demo link](https://dtsehelnyk.github.io/Rick_Morty)

## Description

The Characters page has a list of all characters that are in the tv series. The list has a filter by “species”, “status”, “gender” fields. The character card has a character picture (if any), and some additional info about that character. When you click on the character card – the popup should be opened where will be all character info.

The episode page is be really similar to the character page, the episodes can be filtered by “name” field.

The Locations page is also a table with pagination and can be filtered by “name”, “type”, “dimension” field.

My watch list has a simple to do like functional there is an input field where user can write down a new episode to watch later. I used local storage to store the ToDo items. The toDo list item has a remove button to remove it from the list and the checkbox to mark it as complete(when the page has reloaded the status of the task and the list don't change).
