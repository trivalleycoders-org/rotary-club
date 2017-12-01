# michael version

SELECT max(h.date), m.member_id, h.role_id, h.served, m.first_name, r.role_name
FROM history h
LEFT JOIN members m ON m.member_id = h.member_id
LEFT JOIN roles r ON r.role_id = h.role_id
WHERE m.exempt != 1
GROUP By m.member_id
ORDER BY h.date ASC