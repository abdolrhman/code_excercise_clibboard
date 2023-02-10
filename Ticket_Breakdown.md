# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Assumption
 - assume agent metadata could include the agent's name, email, phone number, etc also might include the agent's id
 - but we can not relay on this id of the metadata
 - The facility will be able to update the custom_id of an agent at any time
 - facilities can not use the same custom_id for multiple agents
 - the custom_id must be unique
 - since it's a custom id it can be any string
 - assume there is function to create a new agent called `createAgent`


## Ticket 1
### Description
 - Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
 - We need to add a new column to the Agents table called `custom_id` which will be a string. This will be the id that Facilities will use to identify Agents.

### Acceptance Criteria
 - a new column to the Agents table called `custom_id` which will be a string. This will be the id that Facilities will use to identify Agents.
 - the column can not be null
 - the column must be unique
 - the column must be indexed for faster lookup
 - the column must be a string with a max length of 50 characters
 - the column must be a string with a min length of 1 character

### Time Estimate
    - 2 hours
### Implementation Details
 - Add a new column to the Agents table called `custom_id` which will be a string.
 - Add a migration to add the column to the Agents table
 - Add a migration to add a unique index to the column
 - Add a migration to add a not null constraint to the column
 - Add a migration to add a max length constraint to the column
 - Add a migration to add a min length constraint to the column
 - Add a migration to add a string type constraint to the column

## Ticket 2
### Description
 - We need to update the `createAgent` function to allow the `custom_id` to be set when creating a new Agent.
 - we need also to validate the `custom_id` parameter
 - we need to set the `custom_id` column to the value of the `id` column if the `custom_id` parameter is not provided

### Acceptance Criteria
 - the `createAgent` function must accept a `custom_id` parameter
 - the `custom_id` parameter must be optional
 - the `custom_id` parameter must be a string
 - the `custom_id` parameter must be a string with a max length of 50 characters
 - the `custom_id` parameter must be a string with a min length of 1 character
 - the `custom_id` parameter must be unique
 - the `custom_id` parameter must be indexed for faster lookup
 - the `custom_id` parameter must be a string with a max length of 50 characters
 - the `custom_id` parameter must be a string with a min length of 1 character

### Time Estimate
    - 2 hours
### Implementation Details
 - Update the `createAgent` function to accept a `custom_id` parameter
 - Update the `createAgent` function to set the `custom_id` column to the value of the `custom_id` parameter
 - Update the `createAgent` function to set the `custom_id` column to the value of the `id` column if the `custom_id` parameter is not provided
 - Update the `createAgent` function to add a unique index to the `custom_id` column
 - Update the `createAgent` function to add a not null constraint to the `custom_id` column
 - Update the `createAgent` function to add a max length constraint to the `custom_id` column
 - Update the `createAgent` function to add a min length constraint to the `custom_id` column
 - Update the `createAgent` function to add a string type constraint to the `custom_id` column

## Ticket 3
### Description
 - We need to update the `getShiftsByFacility` function to return the `custom_id` of each Agent instead of their internal database id.

### Acceptance Criteria
 - the `getShiftsByFacility` function must return the `custom_id` of each Agent instead of their internal database id.
 - the `custom_id` column must be selected in the query
 - the `custom_id` column must have a default value of the `id` column
 - the `custom_id` column must not be null

### Time Estimate
    - 2 hours

### Implementation Details
 - Update the `getShiftsByFacility` function to return the `custom_id` of each Agent instead of their internal database id.
 - set the `custom_id` column to be selected in the query
 - set the default value of the `custom_id` column to be the `id` column
 - check that the `custom_id` column is not null

## Ticket 4
### Description
 - We need to update the `updateAgent` function to allow the `custom_id` to be updated.

### Acceptance Criteria
 - the `updateAgent` function must accept a `custom_id` parameter
 - the `custom_id` parameter must be optional
 - the `custom_id` parameter must be a string
 - the `custom_id` parameter must be a string with a max length of 50 characters
 - the `custom_id` parameter must be a string with a min length of 1 character
 - the `custom_id` parameter must be unique
 - the `custom_id` parameter must be indexed for faster lookup
 - the `custom_id` parameter must be a string with a max length of 50 characters
 - the `custom_id` parameter must be a string with a min length of 1 character

### Time Estimate
    - 2 hours

### Implementation Details
 - Update the `updateAgent` function to accept a `custom_id` parameter
 - Update the `updateAgent` function to set the `custom_id` column to the value of the `custom_id` parameter
 - Update the `updateAgent` function to add a unique index to the `custom_id` column
 - Update the `updateAgent` function to add a not null constraint to the `custom_id` column
 - Update the `updateAgent` function to add a max length constraint to the `custom_id` column
 - Update the `updateAgent` function to add a min length constraint to the `custom_id` column
 - Update the `updateAgent` function to add a string type constraint to the `custom_id` column

## Ticket 5
### Description
 - We need to return the `custom_id` of each Agent when we return the Agent from the `generateReport` function.
 - We need to update the `generateReport` function to return the `custom_id` of each Agent instead of their internal database id.

### Acceptance Criteria
 - the `generateReport` function must return the `custom_id` of each Agent instead of their internal database id.
 - the `custom_id` column must be selected in the query
 - the `custom_id` column must have a default value of the `id` column
 - the `custom_id` column must not be null

### Time Estimate
    - 2 hours

### Implementation Details
 - Update the `generateReport` function to return the `custom_id` of each Agent instead of their internal database id.
 - set the `custom_id` column to be selected in the query
 - set the default value of the `custom_id` column to be the `id` column
 - check that the `custom_id` column is not null
