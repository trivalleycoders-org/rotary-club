#select distinct m.member_id, m.first_name, ( where h.member_id = m.member_id) as last_served_date, h.role_id
#from members as m, history as h
#where m.member_id = h.member_id



select m.member_id, m.first_name
from members as m, (
  select max(h.date), h.member_id 
  from history as h,  members as m
  where m.member_id = h.member_id) as h
  
where m.member_id = h.member_id;



 
