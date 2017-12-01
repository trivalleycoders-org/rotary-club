select h.date, h.role_id, r.role_name
from history as h, roles as r
where h.role_id = r.role_id
order by date desc
