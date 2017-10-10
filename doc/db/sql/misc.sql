alter table history modify served tinyint(1);

update history set served = 1;