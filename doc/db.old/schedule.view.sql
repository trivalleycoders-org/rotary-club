select h.history_id, h.date, h.member_id, h.role_id, h.served, m.first_name, r.title
from history as h, members as m, roles as r
where h.member_id = m.member_id and h.role_id = r.role_id
order by date