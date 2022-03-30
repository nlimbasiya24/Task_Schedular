
# Task_schedular






## Documentation

Backend API

There are two tables in 1)issue 2)agent
User can store the his issue in 'issue' table
when user store his issue the one field is that is status:'create' is also store in
this table 

In the 'agent' table you can store the peroson which status is 'avalible'

after that there is one endpoint /assigntask it is a get request when you hit this endpoint
if the 'issue' table the status:create is there and 'agent' table the person status:avalible
then both status is changed that is to status:assign and status:busy.

when you change the status to busy to avalible then peroson is ready to take issue.

