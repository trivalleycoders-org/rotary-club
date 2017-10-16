# Rotary Club Schedule


Overview
--------
- See this project for a partial mockup of the app: https://github.com/trivalleycoders-org/fred-demo
- Schedule is the application's home page. By default, the schedule for the next Thursday is shown
- The date dropdown is always available so that the schedule for future weeks can be viewed
- The dropdowns for Role & Name are only available in edit mode

Workflow
--------
- From the home page the user clicks Edit Schedule
- The app gets the next 6 members, roles and the members role preferences from the db
- The app also gets the next x number of people for each role
- In Edit Schedule the user can change the date as well as the role and name for each row


next6 (members)
-------------
member_id
first_name
last_name

select h.history_id, h.date, h.member_id, h.role_id, h.served, m.first_name, r.role_name
from history as h, members as m, roles as r
where h.member_id = m.member_id and h.role_id = r.role_id and m.exempt <> 1
order by date desc
limit 6;


exclusions
------------
exclusion_id
member_id
role_id

select * from exclusions

roles
-----------
role_id
role_name

select * from roles
