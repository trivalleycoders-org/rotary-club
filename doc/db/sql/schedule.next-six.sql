select h.history_id, h.date, h.member_id, h.role_id, h.served, m.first_name, r.role_name
from history as h, members as m, roles as r
where h.member_id = m.member_id and h.role_id = r.role_id and m.exempt <> 1
order by date desc
limit 6;