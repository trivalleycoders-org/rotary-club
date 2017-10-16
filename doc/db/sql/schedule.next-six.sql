select (@row:=@row+1) as sequence, h.history_id, h.date, h.member_id, h.role_id, h.served, m.first_name, r.role_name
from history as h, members as m, roles as r, (select @row := 0) s
where h.member_id = m.member_id and h.role_id = r.role_id and m.exempt <> 1
group by h.member_id
order by date asc
